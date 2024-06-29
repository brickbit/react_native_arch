import { useQuery } from "@apollo/client"
import { GET_CITIES, GET_CITY } from "../api/CityApi"
import { CityBo } from "../../domain/model/CityBo";
import CityListDataBo from "../../domain/model/CityListDataBo";
import CityDataBo from "../../domain/model/CityDataBo";

export interface GetCitiesResult {
    loading?: boolean;
    data?: CityListDataBo | null
    error?: Error | null;
}

export interface GetCityDetailResult {
    loading?: boolean;
    data?: CityDataBo | null
    error?: Error | null;
}

export const cityRepository = () => {
    const { loading, error, data }: GetCitiesResult = useQuery(GET_CITIES);

    const getCities = (): GetCitiesResult => {
        if (loading) return {loading: true, data: null, error: null}
        if (error) return {loading: false, data: null, error}
        return {loading: false, data: data, error: null}
    }
    return { getCities }
}

export const cityDetailRepository = (id: number) => {
    const { loading, error, data }: GetCityDetailResult = useQuery(GET_CITY, {
        variables: { id },
    });

    const getCityDetail = (): GetCityDetailResult => {
        if (loading) return {loading: true, data: null, error: null}
        if (error) return {loading: false, data: null, error}
        return {loading: false, data: data, error: null}
    }
    return { getCityDetail }

}