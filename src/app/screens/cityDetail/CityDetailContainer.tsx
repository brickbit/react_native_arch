import { useEffect, useState } from "react";
import { GetCityDetailResult } from "../../../data/repository/CityRepository";
import { CityBo } from "../../../domain/model/CityBo";
import { getCityDetailUseCase } from "../../../domain/useCase/GetCityDetailUseCase";

export const useDetailCityContainer = (id: number) => {
    const { loading, error, data }: GetCityDetailResult = getCityDetailUseCase(id);
    const [city, setCity] = useState<CityBo | null>(null);
    const [isLoading, setIsLoading] = useState(loading);
  
    useEffect(() => {
        if(isLoading){
            setIsLoading(isLoading);
        }
        if (data) {
            setCity(data.city);
        }
      }, [data]);
    return {city, isLoading};
};
