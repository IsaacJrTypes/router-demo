import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { styles } from '../assets/css';
//import NavBar from "../components/NavBar"
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer'
import { useState } from 'react';

export default function HomePage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            console.log("Result: ",result);
            console.log("Selected:", result.assets[0].uri)
        } else {
            alert('You did not select any image.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.navCenter}>
                <Text>Nav Bar:</Text>
                {/* <Text>From home page</Text> */}
                <Link href="/ProjectsPage/DefaultPage" asChild>
                    <Text style={styles.link}>Project</Text>
                </Link>
                <Link href={{ pathname: '/SkillsPage' }} asChild>
                    <Text style={styles.link}>Skills</Text>
                </Link>
                <Link href="/ContactPage" asChild>
                    <Text style={styles.link}>Contact</Text>
                </Link>

            </View>
            <View>
                <ImageViewer
                    selectedImage={selectedImage}
                />
            </View>
            <View style={styles.row}>
                <Button label={"Choose a photo"} onPress={pickImageAsync} />
                <Button label={"Reset"} onPress={()=> setSelectedImage(null)} />

            </View>
        </View>
    );
}

