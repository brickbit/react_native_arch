package com.fcmtravelguide.nfcServices

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import com.fcmtravelguide.nfcServices.repository.DocumentScanRepository
import com.fcmtravelguide.nfcServices.repository.DocumentScanRepositoryImpl

class DocumentIdentifierManager(private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {


    override fun getName(): String {
        return "DocumentIdentifierManager"
    }

    @ReactMethod
    fun scanDocument(canNumber: String, successCallback: Callback, errorCallback: Callback) {
        val documentRepository: DocumentScanRepository = DocumentScanRepositoryImpl()
        try {
            documentRepository.enableReaderMode(
                canNumber = canNumber,
                activity = reactContext.currentActivity!!,
                onStage = {
                    successCallback.invoke(it)
                },
                onError = {
                    errorCallback.invoke(it.type.name)
                }
            )
        } catch(e: Exception) {
            successCallback.invoke(null);
            errorCallback.invoke(null)
        }
    }
}

