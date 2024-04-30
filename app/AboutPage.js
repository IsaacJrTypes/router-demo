import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../assets/css';
export default function AboutPage() {
    return (
        <View style={styles.center}>
            <Text>From about page</Text>
            <Link push href="/HomePage" style={styles.link}>Go back to home page</Link>
        </View>
    );
}