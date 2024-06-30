import { useEffect, useState } from "react";
import { NativeModules } from "react-native";

const {DocumentIdentifierManager} = NativeModules

export const useNfcScannerContainer = () => {
    const [ deviceId, setDeviceId ] = useState("")

    const getDeviceId = () => DocumentIdentifierManager.getDeviceId(
        (res: string) => {setDeviceId(res);},
        (err: string) => {console.log(err);}
    );
    const data = getDeviceId()

    /*const { loading, error, data }: GetCitiesResult = getCitiesUseCase();
    const [cities, setCities] = useState<CityListDataBo | null>(null);
    const [isLoading, setIsLoading] = useState(loading);*/
  
    useEffect(() => {
        /*if(isLoading){
            setIsLoading(loading)
        }*/
        if (data) {
            setDeviceId(data);
        }
      }, [data]);
    return {deviceId};
  };