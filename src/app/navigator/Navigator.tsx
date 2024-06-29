import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { HomeScreen } from "../screens/home/HomeScreen";
import { getAssetImage } from "../../../assets/photos/AssetImage";
import { CityDetailScreen } from "../screens/cityDetail/CityDetailScreen";

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
                        headerTitle: (props) => <View style={styles.headerStyle}>
                            <Image 
                                source={getAssetImage('FCMLogo')}
                                style={styles.imageHeader}
                            />
                        </View>,
                    }}
                />
                <Stack.Screen
                    name="CityDetail"
                    component={CityDetailScreen}
                    options={{
                        headerTitle: (props) => <View style={styles.headerStyle}>
                            <Image 
                                source={getAssetImage('FCMLogo')}
                                style={styles.imageHeader}
                            />
                        </View>,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        flex:1,
        fjustifyContent: 'center',
        alignItems: 'center',
    },
    imageHeader: {
        justifyContent: 'center',
        width: 80,
        height: 55
    }
})