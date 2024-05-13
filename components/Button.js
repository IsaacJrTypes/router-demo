import { View, Text,Pressable } from 'react-native';

export default function Button({ label, onPress }) {
    // ...rest of the code remains same
    return (
        <View>
            {/* ...rest of the code remains same */}
            <Pressable
                style={ { backgroundColor: '#fff' }}
                onPress={onPress}>
                <Text>{label}</Text>
            </Pressable>
        </View>
    );
}
