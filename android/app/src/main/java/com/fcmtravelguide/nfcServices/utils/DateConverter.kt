package com.fcmtravelguide.nfcServices.utils

import java.text.ParseException
import java.text.SimpleDateFormat
import java.util.*

object DateConverter {
    fun convertDate(input: String?): String {
        return convertDate("dd/MM/yy", "yyMMdd", input).orEmpty()
    }

    fun convertDate(formatIn: String?, formatOut: String?, input: String?): String? {
        return if (input == null || input.isEmpty()) {
            null
        } else try {
            val dateParse: Date = SimpleDateFormat(formatIn, Locale.US).parse(input) as Date
            SimpleDateFormat(formatOut, Locale.US).format(dateParse)
        } catch (e: ParseException) {
            null
        }
    }
}