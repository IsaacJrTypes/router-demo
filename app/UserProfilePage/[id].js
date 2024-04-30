import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';
import { styles } from '../../assets/css';

export default function UserProfilePage() {
    const route = useRoute()
    console.log(route.params)
    const { id } = route.params;
    
    return (
        <View style={styles.center}>
            <Text>
                User Profile id: {id}
            </Text>
            <Link replace href="/HomePage" style={styles.link}>Go back home</Link>
        </View>
    );
}