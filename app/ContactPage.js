import { View, Text } from 'react-native';
//import { styles } from '../../assets/css';
import { Link } from 'expo-router';
import { styles } from '../assets/css';

export default function ContactPage() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text >
                From contact page
            </Text>
            <Link replace href="/" >
                <Text>Go back Home</Text>
            </Link>
            </View>
        </View>
    );
}