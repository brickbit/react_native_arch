package com.fcmtravelguide.nfcServices.repository

import android.app.Activity
import android.nfc.Tag
import com.fcmtravelguide.nfcServices.model.Error

interface DocumentScanRepository {
    fun enableReaderMode(
        canNumber: String,
        activity: Activity,
        onStage: (String) -> Unit,
        onError: (Error.Nfc) -> Unit
    )

    fun unlock(
        canNumber: String,
        tag: Tag,
        onStage: (String) -> Unit,
        onError: (Error.Nfc) -> Unit
    )

    fun getData(
        onStage: (String) -> Unit,
        onError: (Error.Nfc) -> Unit
    )
}