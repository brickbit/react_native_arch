import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Component } from "react";
import { Routes } from "../../navigator/routes";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { useDetailCityContainer } from "./CityDetailContainer";

type Props = NativeStackScreenProps<Routes, 'CityDetail', 'FCMStack'>;

export const CityDetailScreen: React.FC<Props> = ({ route }) => {
    const { id } = route.params;
    const { city, isLoading } = useDetailCityContainer(id);
    if (isLoading) return <ActivityIndicator/>

    return (
        <>
            <Text>Estamos en el detalle {city?.name}</Text>
        </>
    );
    
}