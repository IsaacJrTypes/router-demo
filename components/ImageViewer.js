import {styles} from "../assets/css";
import { View, Text, Image } from "react-native";

export default function ImageViewer({ selectedImage }) {
    const imageSource = selectedImage ? { uri: selectedImage } : '';

    if (imageSource) {
        return <Image source={imageSource} style={styles.img} />;
    }
    return <View>
        <Text>Image testing..</Text>
    </View>;

}
