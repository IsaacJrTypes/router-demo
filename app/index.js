import HomePage from "./HomePage";
import { View} from 'react-native';
import { styles } from '../assets/css';

export default function Page() {
    return (
        <View style={styles.center} >
            <HomePage />
        </View>
    );
}
