import { cityRepository } from "../../data/repository/CityRepository"

export const getCitiesUseCase = () => {
    const { getCities } = cityRepository()
    return getCities()
}