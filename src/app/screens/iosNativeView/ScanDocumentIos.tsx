
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../../navigator/routes';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScanDocumentView } from './native';

type Props = NativeStackScreenProps<Routes, 'ScanDocumentView', 'FCMStack'>;

export const ScanDocumentIos: React.FC<Props> =({ navigation }) => {
    return(
        <SafeAreaView style = { styles.container } >  
            <ScanDocumentView 
                style={ styles.wrapper } 
            />   
        </SafeAreaView>
    );
}

  
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