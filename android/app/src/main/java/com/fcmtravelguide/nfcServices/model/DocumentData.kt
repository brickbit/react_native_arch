package com.fcmtravelguide.nfcServices.model


data class DocumentData(
    val name: String,
    val surname1: String,
    val surname2: String,
    val genre: String,
    val nationality: String,
    val birthday: String,
    val numSupport: String,
    val expiryDate: String,
    val dniNumber:String,
    val faceImage: String?,
    val signImage: String?,
    val address: String,
    val city: String,
    val province: String,
    val cityOfBirth: String,
    val provinceOfBirth: String
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as DocumentData

        if (name != other.name) return false
        if (surname1 != other.surname1) return false
        if (surname2 != other.surname2) return false
        if (genre != other.genre) return false
        if (nationality != other.nationality) return false
        if (birthday != other.birthday) return false
        if (numSupport != other.numSupport) return false
        if (expiryDate != other.expiryDate) return false
        if (dniNumber != other.dniNumber) return false
        if (!faceImage.contentEquals(other.faceImage)) return false
        if (!signImage.contentEquals(other.signImage)) return false
        if (address != other.address) return false
        if (city != other.city) return false
        if (province != other.province) return false
        if (cityOfBirth != other.cityOfBirth) return false
        if (provinceOfBirth != other.provinceOfBirth) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name.hashCode()
        result = 31 * result + surname1.hashCode()
        result = 31 * result + surname2.hashCode()
        result = 31 * result + genre.hashCode()
        result = 31 * result + nationality.hashCode()
        result = 31 * result + birthday.hashCode()
        result = 31 * result + numSupport.hashCode()
        result = 31 * result + expiryDate.hashCode()
        result = 31 * result + dniNumber.hashCode()
        result = 31 * result + faceImage.hashCode()
        result = 31 * result + signImage.hashCode()
        result = 31 * result + address.hashCode()
        result = 31 * result + city.hashCode()
        result = 31 * result + province.hashCode()
        result = 31 * result + cityOfBirth.hashCode()
        result = 31 * result + provinceOfBirth.hashCode()
        return result
    }
}