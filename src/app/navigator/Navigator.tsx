import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { HomeScreen } from "../screens/home/HomeScreen";
import { getAssetImage } from "../../../assets/photos/AssetImage";
import { CityDetailScreen } from "../screens/cityDetail/CityDetailScreen";
import { NfcScannerScreen } from "../screens/nfcScanner/NfcScannerScreen";
import { ScanDocumentIos } from "../screens/iosNativeView/ScanDocumentIos";

const Stack = createNativeStackNavigator<Routes>();
enableScreens();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: (props) => 
                            <Image 
                                source={getAssetImage('FCMLogo')}
                                style={styles.imageHeader}
                            />,
                        headerTitleAlign: 'center',                            
                    }}
                />
                <Stack.Screen
                    name="CityDetail"
                    component={CityDetailScreen}
                    options={{
                        headerTitle: (props) =>
                            <Image 
                                source={getAssetImage('FCMLogo')}
                                style={styles.imageHeader}
                            />,
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="NfcScanner"
                    component={NfcScannerScreen}
                    options={{
                        headerTitle: (props) =>
                            <Image 
                                source={getAssetImage('FCMLogo')}
                                style={styles.imageHeader}
                            />,
                        headerTitleAlign: 'center'
                    }}
                />
                <Stack.Screen
                    name="ScanDocumentView"
                    component={ScanDocumentIos}
                    options={{
                        headerTitle: (props) =>
                            <Image 
                                source={getAssetImage('FCMLogo')}
                                style={styles.imageHeader}
                            />,
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    imageHeader: {
        position: 'relative',
        width: 80,
        height: 55,
    }
})