import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';
import { styles } from '../../assets/css';
import data from '../../assets/data';


export default function UserProfilePage() {
    const route = useRoute();
    console.log(route.params);
    const { id } = route.params;
    const project = data.find(obj => obj.id === parseInt(id));
    //console.log(project)

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text >
                    Project name: {project ? project.name : 'No project found'}
                </Text>
                <Link pop href="/ProjectsPage/DefaultPage" style={styles.link}>Go back</Link>
            </View>
        </View>
    );
}