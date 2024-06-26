import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Component } from "react";
import { Routes } from "../navigator/routes";
import { Text, TouchableOpacity } from "react-native";

type Props = NativeStackScreenProps<Routes, 'Home', 'FCMStack'>;

export default class HomeScreen extends Component<Props,{}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return <>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('CityDetail')}}>
                <Text>Ir al detalle</Text>
            </TouchableOpacity>
        </>
    }
}