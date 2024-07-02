import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Component } from "react";
import { Routes } from "../../navigator/routes";
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDetailCityContainer } from "./CityDetailContainer";
import { getAssetImage } from "../../../../assets/photos/AssetImage";
import { usePlacesContainer } from "./PlacesContainer";
import { getLanguageName } from "../../utils/GetLanguageName";

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
                {city?.name != null ?
                    <>
                        <Text style={styles.body}>Idioma: {getLanguageName(city?.language)}</Text>
                        <Text style={styles.body}>Currency: {city?.currency}</Text>
                    </>
                    : <View/>
                }
            </View>
        );
    }

    const _renderItem = ({item}: any) => {
        return (
            <View style={styles.listItem}>
                <Text style={styles.cardTitle}>{item.place.name}</Text>
                <Text style={styles.cardSubtitle}>{item.place.type}</Text>
                <Text style={styles.cardSubtitle}>{(item.place.coordinates as number[])[0] + " - " + (item.place.coordinates as number[])[1]}</Text>
            </View>
        );
    }
    const placesOfCity = places?.place
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
        flex: 1,
        color: 'rgba(0,222,0,255)'
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
    body: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    list: {
    },
    listItem: {
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 16,
        marginHorizontal: 16
    },
    cardTitle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'black',
    },
});