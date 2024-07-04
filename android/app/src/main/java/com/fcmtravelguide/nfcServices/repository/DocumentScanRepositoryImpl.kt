package com.fcmtravelguide.nfcServices.repository

import android.app.Activity
import android.graphics.Bitmap
import android.nfc.NfcAdapter
import android.nfc.Tag
import android.nfc.tech.IsoDep
import android.os.Bundle
import android.util.Base64
import com.fcmtravelguide.nfcServices.model.DocumentData
import com.fcmtravelguide.nfcServices.model.Error
import com.fcmtravelguide.nfcServices.model.NfcErrorType
import com.gemalto.jp2.JP2Decoder
import com.google.gson.Gson
import net.sf.scuba.smartcards.CardService
import org.jmrtd.PACEKeySpec
import org.jmrtd.PassportService
import org.jmrtd.lds.CardAccessFile
import org.jmrtd.lds.LDSFileUtil
import org.jmrtd.lds.PACEInfo
import org.jmrtd.lds.icao.DG11File
import org.jmrtd.lds.icao.DG1File
import org.jmrtd.lds.icao.DG2File
import org.jmrtd.lds.icao.DG7File
import org.jmrtd.lds.icao.MRZInfo
import org.jmrtd.lds.iso19794.FaceImageInfo
import java.io.ByteArrayOutputStream

@Suppress("INACCESSIBLE_TYPE")
class DocumentScanRepositoryImpl: DocumentScanRepository {
    private var tag: Tag? = null
    private var passportService: PassportService? = null
    private var nfcAdapter: NfcAdapter? = null

    override fun enableReaderMode(
        canNumber: String,
        activity: Activity,
        onStage: (String) -> Unit,
        onError: (Error.Nfc) -> Unit
    ) {
        nfcAdapter = NfcAdapter.getDefaultAdapter(activity)
        if (nfcAdapter != null) {
            if (nfcAdapter?.isEnabled == true) {

                val delay = Bundle()
                delay.putInt(NfcAdapter.EXTRA_READER_PRESENCE_CHECK_DELAY, 10000)
                nfcAdapter!!.enableReaderMode(
                    activity,
                    { tag ->
                        //onStage(ReadingStage.UNLOCKING_SIMPLE_DATA)
                        this.tag = tag
                        unlock(
                            canNumber,
                            tag,
                            onStage,
                            onError
                        )
                    },
                    NfcAdapter.FLAG_READER_SKIP_NDEF_CHECK or
                            NfcAdapter.FLAG_READER_NFC_B or
                            NfcAdapter.FLAG_READER_NFC_A,
                    delay
                )
            } else {
                closeCommunications(activity)
                onError(Error.Nfc(NfcErrorType.DEACTIVATED))
            }
        } else {
            closeCommunications(activity)
            onError(Error.Nfc(NfcErrorType.DEVICE_INCOMPATIBLE))
        }
    }

    override fun unlock(
        canNumber: String,
        tag: Tag,
        onStage: (String) -> Unit,
        onError: (Error.Nfc) -> Unit
    ) {
        if (IsoDep.get(tag) != null) {

            var isoDep = IsoDep.get(tag)//warning: must be var to update timeout otherwise BAC doesn't work
            isoDep.timeout = 5000
            val cardService = CardService.getInstance(isoDep)
            passportService = PassportService(cardService, 256, 224, false, true)
            passportService!!.open()
            val paceKey = PACEKeySpec.createCANKey(canNumber)
            return try {
                val paceSucceeded: Boolean = doPace(passportService!!, paceKey)
                if (paceSucceeded) {
                    passportService!!.sendSelectApplet(true)
                    getData(onStage, onError)
                } else {
                    onError(Error.Nfc(NfcErrorType.AUTH_ERROR))
                }
            } catch (e: Exception) {
                onError(Error.Nfc(NfcErrorType.AUTH_ERROR))
            }
        } else {
            onError(Error.Nfc(NfcErrorType.TAG_UNAVAILABLE))
        }
    }

    override fun getData(onStage: (String) -> Unit, onError: (Error.Nfc) -> Unit) {
        try {
            val mrzInfo = getDG1Data()
            val faceInputStream = Base64.encodeToString(getDG2Data(), Base64.DEFAULT)
            val signInputStream = Base64.encodeToString(getDG7Data(), Base64.DEFAULT)
            val userLocationInfo = getDG11Data()
            val name = mrzInfo.secondaryIdentifier.replace("<", "")
            val surnames = mrzInfo.primaryIdentifier.split(" ")
            val data = DocumentData(
                name = name,
                surname1 = surnames[0],
                surname2 = surnames[1],
                genre = mrzInfo.gender.name,
                nationality = mrzInfo.nationality,
                birthday = parseDate(mrzInfo.dateOfBirth),
                numSupport = mrzInfo.documentNumber,
                expiryDate = parseDate(mrzInfo.dateOfExpiry),
                dniNumber = mrzInfo.personalNumber,
                faceImage = faceInputStream,
                signImage = signInputStream,
                address = userLocationInfo.permanentAddress[0],
                city = userLocationInfo.permanentAddress[1],
                province = userLocationInfo.permanentAddress[2],
                cityOfBirth = userLocationInfo.placeOfBirth[0],
                provinceOfBirth = userLocationInfo.placeOfBirth[1]
            )
            val json = Gson().toJson(data)
            onStage(json)
        } catch (exception: Exception) {
            onError(Error.Nfc(NfcErrorType.READ_DATA_ERROR))
        }
    }

    private fun parseDate(date: String): String {
        return (date[4].toString() + date[5] + date[2] + date[3] + date[0] + date[1])

    }

    private fun doPace(passportService: PassportService, paceKey: PACEKeySpec): Boolean {
        var paceSucceeded = false
        val cardAccessFile =
            CardAccessFile(passportService.getInputStream(PassportService.EF_CARD_ACCESS))
        val secInfos = cardAccessFile.securityInfos
        if (secInfos != null && !secInfos.isEmpty()) {
            val paceInfo = secInfos.iterator().next() as PACEInfo
            val oid = paceInfo.objectIdentifier
            val paramId = paceInfo.parameterId
            val params = PACEInfo.toParameterSpec(paramId)
            passportService.doPACE(paceKey, oid, params, paramId)
            paceSucceeded = true
        }
        return paceSucceeded
    }

    private fun getDG1Data(): MRZInfo {
        val dg1IS = passportService!!.getInputStream(PassportService.EF_DG1)
        val dg11File = LDSFileUtil.getLDSFile(PassportService.EF_DG1, dg1IS) as DG1File
        return dg11File.mrzInfo
    }

    private fun getDG2Data(): ByteArray {
        val dg2In = passportService!!.getInputStream(PassportService.EF_DG2)
        val dg2File = LDSFileUtil.getLDSFile(PassportService.EF_DG2, dg2In) as DG2File
        val faceInfo = dg2File.faceInfos
        val faceImageInfo = mutableListOf<FaceImageInfo>()
        faceInfo.map {
            faceImageInfo.addAll(it.faceImageInfos)
        }
        val image = JP2Decoder(faceImageInfo[0].imageInputStream).decode()
        val stream = ByteArrayOutputStream()
        image.compress(Bitmap.CompressFormat.PNG, 100, stream)
        return stream.toByteArray()
    }

    private fun getDG7Data(): ByteArray {
        val dg7In = passportService!!.getInputStream(PassportService.EF_DG7)
        val dg7File = LDSFileUtil.getLDSFile(PassportService.EF_DG7, dg7In) as DG7File
        val image = JP2Decoder(dg7File.images[0].imageInputStream).decode()
        val stream = ByteArrayOutputStream()
        image.compress(Bitmap.CompressFormat.PNG, 100, stream)
        return stream.toByteArray()
    }

    private fun getDG11Data(): DG11File {
        val dg11In = passportService!!.getInputStream(PassportService.EF_DG11)
        return LDSFileUtil.getLDSFile(PassportService.EF_DG11, dg11In) as DG11File
    }

    private fun closeCommunications(activity: Activity) {
        closeService()
        nfcAdapter?.disableReaderMode(activity)
        nfcAdapter = null
    }

    private fun closeService() {
        passportService?.close()
        passportService = null
    }
}