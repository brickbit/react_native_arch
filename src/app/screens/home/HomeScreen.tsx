import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../../navigator/routes";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CityBo } from "../../../domain/model/CityBo";
import { getAssetImage } from "../../../../assets/photos/AssetImage";
import { useCityContainer } from "./CityContainer";


type Props = NativeStackScreenProps<Routes, 'Home', 'FCMStack'>;

export const HomeScreen: React.FC<Props> =({ navigation }) => {
    const { cities, isLoading } = useCityContainer();

    if (isLoading) return <Text>Loading...</Text>
    //if (error) return <Text>Error: {error.message}</Text>

    const _keyExtractor = (item: any, index: { toString: () => any;}) => index.toString()

    const _getHeader = () =>  {
        return (
            <>
                <TouchableOpacity style={styles.infoBox} onPress={()=>{navigation.navigate('CityDetail', { id: '0'})}}>
                    <Text>We still do not have the traveler's data click here to obtain their data through an identity document</Text>
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
                style={styles.box}
                onPress={() =>{navigation.navigate('CityDetail', { id: item.id})}}
            >
                <Image
                    source={assetName}
                    style={styles.image}
                />
                <View>
                    <Text>{name}</Text>
                    <Text>{language}</Text>
                    <Text>{currency}</Text>
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
        backgroundColor: 'white',
        padding: 16,
        flexGrow: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      display: 'flex',
      backgroundColor: 'red',
      alignItems: 'center',
      marginBottom: 16,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20, 
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    infoBox: {
        backgroundColor: 'ghostwhite',
        paddingHorizontal: 24,
        paddingVertical: 32,
        marginBottom: 24
    },
    title: {
        fontSize: 20,
        marginBottom: 16
    },
    list: {
        width: '100%'
    },
    image: {
      width: 80,
      height: 80,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20, 
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginRight: 12
    },
  });
