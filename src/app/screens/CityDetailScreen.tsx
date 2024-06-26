import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Component } from "react";
import { Routes } from "../navigator/routes";
import { Text, TouchableOpacity } from "react-native";

type Props = NativeStackScreenProps<Routes, 'CityDetail', 'FCMStack'>;

export default class CityDetailScreen extends Component<Props,{}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return <>
            <Text>Estamos en el detalle</Text>
        </>
    }
}