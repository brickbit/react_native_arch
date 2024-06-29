import { useEffect, useState } from "react";
import { GetCityDetailResult } from "../../../data/repository/CityRepository";
import { CityBo } from "../../../domain/model/CityBo";
import { getCityDetailUseCase } from "../../../domain/useCase/GetCityDetailUseCase";


export const useDetailCityContainer = (id: string) => {
    const { loading, error, data }: GetCityDetailResult = getCityDetailUseCase(id);

    const [city, setCity] = useState<CityBo | null>(null);
    const [isLoading, setIsLoading] = useState(loading);
  
    useEffect(() => {
        if(isLoading){
            setIsLoading(isLoading)
        }
        if (data) {
            setCity(data);
        }
      }, [data]);
      console.log("Detail: "+data?.name)
    return {city, isLoading};
  };
