package com.fcmtravelguide.nfcServices

sealed class Error: Throwable() {
    data class Nfc(val type: NfcErrorType): Error()
}



