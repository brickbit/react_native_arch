package com.fcmtravelguide.nfcServices.model

sealed class Error: Throwable() {
    data class Nfc(val type: NfcErrorType): Error()
}



