import { Link,router } from 'expo-router';
import { View, Text,Pressable } from 'react-native';
export default function HomePage() {
    return (
        <View>
            <Text>Nav Bar</Text>
            {/* <Text>From home page</Text> */}
            <Link href="/AboutPage" asChild>
                <Pressable onPress={() => router.push("/AboutPage")}>
                    <Text>About page</Text>
                </Pressable>
            </Link>
            <Link href="/UserProfilePage" asChild>
                <Pressable onPress={() => router.push("/UserProfilePage")}>
                    <Text>User Profile Page</Text>
                </Pressable>
            </Link>
        </View>
    );
}