import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Component } from "react";
import { Routes } from "../navigator/routes";
import { Text, TouchableOpacity } from "react-native";

type Props = NativeStackScreenProps<Routes, 'CityDetail', 'FCMStack'>;

export const CityDetailScreen: React.FC<Props> = ({ route }) => {
    const { id } = route.params;

    return (
        <>
            <Text>Estamos en el detalle {id}</Text>
        </>
    );
    
}