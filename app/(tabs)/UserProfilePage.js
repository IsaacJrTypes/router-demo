import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function UserProfilePage() {
    const params = useLocalSearchParams();
    console.log(typeof params)
    return (
        <View>
            <Text>
                User Profile id: 
            </Text>
        </View>
    );
}