import { useEffect, useState } from "react";
import { GetCitiesResult } from "../../../data/repository/CityRepository";
import { getCitiesUseCase } from "../../../domain/useCase/GetCitiesUseCase";
import CityListDataBo from "../../../domain/model/CityListDataBo";

export const useCityContainer = () => {
    const { loading, error, data }: GetCitiesResult = getCitiesUseCase();
    const [cities, setCities] = useState<CityListDataBo | null>(null);
    const [isLoading, setIsLoading] = useState(loading);
  
    useEffect(() => {
        if(isLoading){
            setIsLoading(loading);
        }
        if (data) {
            setCities(data);
        }
      }, [data]);
    return {cities, isLoading};
  };

