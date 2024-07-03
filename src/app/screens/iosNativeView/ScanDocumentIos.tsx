
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../../navigator/routes';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { ScanDocumentView } from './native';



type Props = NativeStackScreenProps<Routes, 'ScanDocumentView', 'FCMStack'>;

export const ScanDocumentIos: React.FC<Props> =({ navigation }) => {
    const nameArray = ["Alice", "Bob", "Charlie", "Can", "David", "Eve"];
    const getRandomName = () => {
        const randomIndex = Math.floor(Math.random() * nameArray.length);
        return nameArray[randomIndex];
      };
    
    const [currentName, setCurrentName] = useState(getRandomName);

    const handleChangeName = () => {
        setCurrentName(getRandomName)
    }

    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);

    return(
        <SafeAreaView style = { styles.container } >
            <View style = { styles.wrapper }>
            <Text style={{ 
                fontSize: 50,
                color: 'red',
                fontWeight: isBold ? 'bold' : 'normal',
                fontStyle: isItalic ? 'italic' : 'normal',
                textDecorationLine: isUnderline ? 'underline' : 'none',
                }}>{currentName}</Text>
            <Button title = "Change Name" onPress = { handleChangeName } />
            </View>   
            <ScanDocumentView 
                style={ styles.wrapper } 
                onChangeBoldToggle={ event => {
                    setIsBold(event.nativeEvent.isBold)
                  }
                }
                onChangeItalicToggle={ event => {
                  setIsItalic(event.nativeEvent.isItalic)
                  }
                }
                onChangeUnderlineToggle={ event => {
                  setIsUnderline(event.nativeEvent.isUnderline)
                  }
                }
            />   
        </SafeAreaView>
    );
}
/*

*/
  
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})