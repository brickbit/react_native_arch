import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../../navigator/routes";
import { ActivityIndicator, Alert, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNfcScannerContainer } from "./NfcScannerContainer";
import React, { useEffect } from "react";
import { Base64Image } from "../views/BaseImage64";
import { getAssetImage } from "../../../../assets/photos/AssetImage";
import { getErrorMessage } from "../../utils/MessageError";


type Props = NativeStackScreenProps<Routes, 'NfcScanner', 'FCMStack'>;

export const NfcScannerScreen: React.FC<Props> =({ navigation }) => {
    const { documentData, error, isLoading, canNumber, scanDocument, retry, onChangeNumber } = useNfcScannerContainer();
    const number = ""    

    useEffect(() => {
        
        if(error!= null) {
            Alert.alert('An error has occurred', getErrorMessage(error), [
                {text: 'OK', onPress: () => retry},
              ]);
        }
        
      }, [{}, error]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>ID card reader with NFC</Text>
            {isLoading ? 
            <ActivityIndicator size={'large'} style={styles.spinner}/> :
                <View>
                    {documentData != null ?
                        <View style={styles.card}>
                            <View style={styles.row}>
                                <View style={styles.column}>
                                    <View style={styles.faceImage}>
                                        <Base64Image base64String={documentData.faceImage } width={100} height={125}/>
                                    </View>
                                    <Text style={styles.subtitle}>{documentData.dniNumber}</Text>
                                </View>
                                
                                <View style={styles.column}>
                                    <Text style={styles.subtitle}>{documentData.surname1}</Text>
                                    <Text style={styles.subtitle}>{documentData.surname2}</Text>
                                    <Text style={styles.subtitle}>{documentData.name}</Text>
                                    <View style={styles.row}>
                                        <Text style={styles.subtitle}>{documentData.genre}</Text>
                                        <Text style={styles.subtitle}>{documentData.nationality}</Text>
                                    </View>
                                    <Text style={styles.subtitle}>{documentData.birthday}</Text>
                                    <View style={styles.row}>
                                        <Text style={styles.subtitle}>{documentData.numSupport}</Text>
                                        <Text style={styles.subtitle}>{canNumber}</Text>
                                    </View>
                                    <Base64Image base64String={documentData.signImage } width={75} height={35}/>
                                </View>
                            </View>
                        </View>
                        :
                        <Image
                            source={getAssetImage('scanNfc')}
                            style={styles.nfcImage}
                        />
                    }
                    <View style={styles.column}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={canNumber}
                            placeholder="CAN number"
                            placeholderTextColor="black" 
                            keyboardType="numeric"
                        />
                        
                        <TouchableOpacity 
                            onPress={() =>{
                                scanDocument()
                            }}  
                        >
                        <Text style={styles.button}>Start scanning</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            }
        </View>
    );
}




const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        height:'100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.01)',
        padding: 16,
        alignItems: 'center', 
    },
    spinner: {
        flex: 1,
        color: 'rgba(0,222,0,255)'
    },
    input: {
        color: 'black',
        width: 200,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        color: 'black',
        marginEnd: 8
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    button: {
        width: 200,
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'black',
        padding: 10,
        marginVertical: 8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }, 
    card: {
        borderWidth: 1,
        height:190,
        padding: 16,
        margin: 32,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    faceImage: {
        width: 100,
        height: 125,
        marginEnd: 16,
        marginBottom: 16
        
    },
    nfcImage: {
        height: 190,
        width: 200,
        margin: 32,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
    }
});    
