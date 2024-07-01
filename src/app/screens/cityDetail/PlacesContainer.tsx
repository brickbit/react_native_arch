import { useEffect, useState } from "react";
import { GetPlacesByKeyResult, GetPlacesResult } from "../../../data/repository/PlaceRepository";
import { getFilteredPlacesUseCase } from "../../../domain/useCase/GetFilteredPlacesUseCase";
import PlaceListDataBo from "../../../domain/model/PlaceListDataBo";
import PlaceKeyDataBo from "../../../domain/model/PlaceKeyDataBo";

export const usePlacesContainer = (name: string | undefined) => {
    const [places, setPlaces] = useState<PlaceKeyDataBo | null>(null);
    const [isLoadingPlaces, setIsLoading] = useState(false);
    if (name != undefined) {
        const { loading, error, data }: GetPlacesByKeyResult = getFilteredPlacesUseCase(name.toLowerCase());
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