import { Image, StyleSheet, Text, View } from "react-native";
import { getAssetImage } from "../../../../assets/photos/AssetImage";
import { Base64Image } from "./BaseImage64";

interface DocumentCardViewProps {
    documentData: DocumentDataBo | null;
    canNumber: string | undefined;
}

export const DocumentCardView: React.FC<DocumentCardViewProps> = ({ documentData, canNumber}) => {
    return (
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
      </View>
    );
  };

  const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        color: 'black',
        marginEnd: 8
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