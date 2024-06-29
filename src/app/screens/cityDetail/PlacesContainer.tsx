import { useEffect, useState } from "react";
import { GetPlacesResult } from "../../../data/repository/PlaceRepository";
import { getFilteredPlacesUseCase } from "../../../domain/useCase/GetFilteredPlacesUseCase";
import PlaceDataBo from "../../../domain/model/PlaceDataBo";

export const usePlacesContainer = (name: string | undefined) => {
    const [places, setPlaces] = useState<PlaceDataBo | null>(null);
    const [isLoadingPlaces, setIsLoading] = useState(false);
    if (name != undefined) {
        const { loading, error, data }: GetPlacesResult = getFilteredPlacesUseCase(name.toLowerCase());
        useEffect(() => {
            if(isLoadingPlaces){
                setIsLoading(loading ?? false)
            }
            if (data) {
                setPlaces(data);
            }
          }, [data]);
    }
  
    return {places, isLoadingPlaces};
};