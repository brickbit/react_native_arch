import { Image, ImageStyle, StyleProp, StyleSheet, View } from "react-native";

interface Base64ImageProps {
    base64String: string;
    width?: number;
    height?: number;
}
  
export const Base64Image: React.FC<Base64ImageProps> = ({ base64String, width = 200, height = 200 }) => {
    const imageStyle: StyleProp<ImageStyle> = { width, height };
  
    return (
      <View style={styles.container}>
        <Image
          style={[styles.image, imageStyle]}
          source={{ uri: `data:image/png;base64,${base64String}` }}
          resizeMode="cover"
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
    },
});
  
