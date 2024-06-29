import { cityDetailRepository } from "../../data/repository/CityRepository"

export const getCityDetailUseCase = (id: string) => {
    const { getCityDetail } = cityDetailRepository(id)
    return getCityDetail()
}