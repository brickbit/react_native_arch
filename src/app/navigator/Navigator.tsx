import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CityDetailScreen from "../screens/CityDetailScreen";
import { enableScreens } from "react-native-screens";

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
                        headerTitle: (props) => <Text>Home</Text>
                    }}
                />
                <Stack.Screen
                    name="CityDetail"
                    component={CityDetailScreen}
                    options={{
                        headerTitle: (props) => <Text>Detail</Text>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}