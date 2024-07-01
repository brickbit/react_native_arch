import { useState } from "react";
import { NativeModules } from "react-native";

const {DocumentIdentifierManager} = NativeModules

export const useNfcScannerContainer = () => {
    const [ documentData, setDocumentData ] = useState<DocumentDataBo | null>(null);
    const [ error, setError ] = useState<string | null>(null)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ canNumber, setCanNumber ] = useState<string | undefined>('')

    const scanDocument = () => {
        setIsLoading(true);
        DocumentIdentifierManager.scanDocument(
            canNumber,
            (res: string) => {
                const doc: DocumentDataBo = JSON.parse(res);
                setDocumentData(doc);
                setIsLoading(false);
            },
            (err: string) => {
                setError(err);
                setIsLoading(false);
            }
        );
    }

    const retry = (canNumber: string) => {
        setCanNumber(canNumber)
        setError(null)
        setDocumentData(null)
        setIsLoading(false)
    }

    const onChangeNumber = (input: string|undefined) => {
        if(input != undefined) {
            setCanNumber(input)
        } else {
            setCanNumber("")
        }
        
    }

    return {documentData, error, isLoading, canNumber, scanDocument, retry, onChangeNumber};
};