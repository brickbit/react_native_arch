import { placeFilteredRepository } from "../../data/repository/PlaceRepository"

export const getFilteredPlacesUseCase = (key: string) => {
    const { getPlacesFiltered } = placeFilteredRepository(key)
    return getPlacesFiltered()
}