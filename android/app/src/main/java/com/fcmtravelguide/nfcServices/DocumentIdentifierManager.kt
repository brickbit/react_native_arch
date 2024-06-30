package com.fcmtravelguide.nfcServices

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class DocumentIdentifierManager(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "DocumentIdentifierManager"
    }

    @ReactMethod
    fun getDeviceId(successCallback: Callback, errorCallback: Callback) {
        try {
            val result = "Samsung"
            successCallback.invoke(result)
        } catch (e: Exception) {
            errorCallback(e.toString())
        }
    }
}