import { useEffect, useState } from "react";
import CityDataBo from "../../../domain/model/CityDataBo";
import { GetCitiesResult } from "../../../data/repository/CityRepository";
import { getCitiesUseCase } from "../../../domain/useCase/GetCitiesUseCase";

export const useCityContainer = () => {
    const { loading, error, data }: GetCitiesResult = getCitiesUseCase();
    const [cities, setCities] = useState<CityDataBo | null>(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        if(isLoading){
            setIsLoading(isLoading)
        }
        if (data) {
            setCities(data);
        }
      }, [data]);
    return {cities, isLoading};
  };

