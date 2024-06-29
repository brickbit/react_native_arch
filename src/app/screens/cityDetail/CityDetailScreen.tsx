import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Component } from "react";
import { Routes } from "../../navigator/routes";
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDetailCityContainer } from "./CityDetailContainer";
import { getAssetImage } from "../../../../assets/photos/AssetImage";
import { usePlacesContainer } from "./PlacesContainer";
import PlaceDataBo from "../../../domain/model/PlaceDataBo";
import { PlaceBo } from "../../../domain/model/PlaceBo";

type Props = NativeStackScreenProps<Routes, 'CityDetail', 'FCMStack'>;

export const CityDetailScreen: React.FC<Props> = ({ route }) => {
    const { id, name } = route.params;
    const { city, isLoading } = useDetailCityContainer(id);
    const { places, isLoadingPlaces } = usePlacesContainer(name);

    if (isLoading && isLoadingPlaces) return <ActivityIndicator size={'large'} style={styles.spinner}/>

    const _keyExtractor = (item: any, index: { toString: () => any;}) => index.toString()

    const _getHeader = () => {
        return  (
            <View>
                {city?.name != null ?
                    <>
                        <Image
                                source={getAssetImage(city?.name)}
                                style={styles.image}
                            />
                        <Text style={styles.title}>{city?.name}</Text>
                    </>
                    : <View/>
                }
            </View>
        );
    }

    const _renderItem = ({item}: any) => {
        return (
            <Text>{item.place.name}</Text>
        );
    }
    console.log("Places: " + places?.places[0].place.name)
    const placesOfCity = places?.places
    return (
        <FlatList style={styles.list}
            ListHeaderComponent={ _getHeader() }
            data={placesOfCity}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
        />
    );
    
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1
    },
    image: {
        width: '100%',
        height: 320,
    },
    title: {
        fontSize: 28,
        padding: 16,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        bottom: 0
    },
    list: {

    }
});