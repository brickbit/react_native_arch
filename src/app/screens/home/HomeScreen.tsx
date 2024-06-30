import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../../navigator/routes";
import { ActivityIndicator, FlatList, Image, NativeModules, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CityBo } from "../../../domain/model/CityBo";
import { getAssetImage } from "../../../../assets/photos/AssetImage";
import { useCityContainer } from "./CityContainer";


type Props = NativeStackScreenProps<Routes, 'Home', 'FCMStack'>;

export const HomeScreen: React.FC<Props> =({ navigation }) => {
    const { cities, isLoading } = useCityContainer();
    
    if (isLoading) return <ActivityIndicator size={'large'} style={styles.spinner}/>

    const _keyExtractor = (item: any, index: { toString: () => any;}) => index.toString()

    const _getHeader = () =>  {
        
        return (
            <>
                <TouchableOpacity style={styles.infoBox} onPress={()=>{navigation.navigate('NfcScanner')}}>
                    <Text style={styles.subtitle}>We still do not have the traveler's data click here to obtain their data through an identity document</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Cities to visit</Text>
            </>     
        );
    }

  
    const _renderItem = ({item}: any) => {
        const name = (item as CityBo).name
        const language = (item as CityBo).language
        const currency = (item as CityBo).currency
        let assetName = getAssetImage(name)
        return (
            <TouchableOpacity 
                onPress={() =>{navigation.navigate('CityDetail', { id: item.id, name: item.name})}}
            >
                <Image
                    source={getAssetImage(name)}
                    style={styles.image}
                />
                <View style={styles.detailCityBox}>
                    <Text style={styles.cardTitle}>{name}</Text>
                    <Text style={styles.cardSubtitle}>{"In "+ name + " you will need to use " + currency + " and speak "+ language + " or use a translator"}</Text>
                    <Text style={styles.cardAction}>Explore their places</Text>
                </View>
                
            </TouchableOpacity>
            
        )
    } 

    return (
        <View style={styles.screen}>
            <FlatList style={styles.list}
                ListHeaderComponent={ _getHeader() }
                data={cities?.cities}
                keyExtractor={_keyExtractor}
                renderItem={_renderItem}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgba(0,0,0,0.01)',
        padding: 16,
        flexGrow: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    spinner: {
        flex: 1
    },
    detailCityBox: {
        width: '90%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 16,
        zIndex: 2,
        margin: 16,
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    infoBox: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 32,
        marginBottom: 24,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    list: {
        width: '100%'
    },
    image: {
        width: '100%',
        height: 320,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 16
    },
    cardTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
    cardAction: {
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingVertical: 8,
        margin: 8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
  });
