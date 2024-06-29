import { cityDetailRepository } from "../../data/repository/CityRepository"

export const getCityDetailUseCase = (id: number) => {
    const { getCityDetail } = cityDetailRepository(id)
    return getCityDetail()
}