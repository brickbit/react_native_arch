import { useQuery } from "@apollo/client"
import { GET_PLACES, GET_PLACES_FILTERED } from "../api/PlaceApi";
import PlaceListDataBo from "../../domain/model/PlaceListDataBo";
import PlaceKeyDataBo from "../../domain/model/PlaceKeyDataBo";

export interface GetPlacesResult {
    loading?: boolean;
    data?: PlaceListDataBo | null
    error?: Error | null;
}

export interface GetPlacesByKeyResult {
    loading?: boolean;
    data?: PlaceKeyDataBo | null
    error?: Error | null;
}

export const placeRepository = () => {
    const { loading, error, data }: GetPlacesResult = useQuery(GET_PLACES);

    const getPlaces = (): GetPlacesResult => {
        if (loading) return {loading: true, data: null, error: null}
        if (error) return {loading: false, data: null, error}
        return {loading: false, data: data, error: null}
    }
    return { getPlaces }
}

export const placeFilteredRepository = (key: string) => {
    const { loading, error, data }: GetPlacesByKeyResult = useQuery(GET_PLACES_FILTERED, {
        variables: { key },
    });

    const getPlacesFiltered = (): GetPlacesByKeyResult => {
        if (loading) return {loading: true, data: null, error: null}
        if (error) return {loading: false, data: null, error}
        return {loading: false, data: data, error: null}
    }
    return { getPlacesFiltered }

}