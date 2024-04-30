import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import {  styles } from '../assets/css';



export default function HomePage() {
    return (
        <View style={styles.center}>
            <Text>Nav Bar:</Text>
            {/* <Text>From home page</Text> */}
            <Link href="/AboutPage" asChild>
                <Text style={styles.link}>About page</Text>
            </Link>
            <Link href={{ pathname: '/UserProfilePage/10'}} asChild>
                <Text style={styles.link}>User Profile Page</Text>
            </Link>
        </View>
    );
}

