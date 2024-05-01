import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../assets/css';

export default function SkillsPage() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Text >
                Skills Page
            </Text>
            <Link replace href="/" >
                <Text>Go back Home</Text>
            </Link>
            </View>
        </View>
    );
}
