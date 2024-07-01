package com.fcmtravelguide.nfcServices

sealed class ReadingStage {
    object None: ReadingStage()
    object Initializing: ReadingStage()
    object unlockingSimpleData: ReadingStage()
    object Authenticating: ReadingStage()
    object GettingData: ReadingStage()
    data class Complete(val data: String)
}