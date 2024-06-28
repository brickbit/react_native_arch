import { useQuery } from "@apollo/client"
import { GET_CITIES } from "../api/CityApi"
import CityDataBo from "../../domain/model/CityDataBo";

export interface GetCitiesResult {
    loading?: boolean;
    data?: CityDataBo | null
    error?: Error | null;
  }

export const cityRepository = () => {
    const { loading, error, data }: GetCitiesResult = useQuery(GET_CITIES);

    const getCities = (): GetCitiesResult => {
        console.log('Data obtained: '+ data +'  Error: '+error)
        if (loading) return {loading: true, data: null, error: null}
        if (error) return {loading: false, data: null, error}
        return {loading: false, data: data, error: null}
    }
    return { getCities }
}