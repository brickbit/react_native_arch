import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../../navigator/routes";
import { Text } from "react-native";
import { useNfcScannerContainer } from "./NfcScannerContainer";


type Props = NativeStackScreenProps<Routes, 'NfcScanner', 'FCMStack'>;

export const NfcScannerScreen: React.FC<Props> =({ navigation }) => {
    const { deviceId } = useNfcScannerContainer();
    
    return (
        <Text>Conexión nativa {deviceId}</Text>
    );
}