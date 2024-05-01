import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import {  styles } from '../assets/css';
//import NavBar from "../components/NavBar"


export default function HomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.navCenter}>
                <Text>Nav Bar:</Text>
                {/* <Text>From home page</Text> */}
                <Link href="/ProjectsPage/DefaultPage" asChild>
                    <Text style={styles.link}>Project</Text>
                </Link>
                <Link href={{ pathname: '/SkillsPage' }} asChild>
                    <Text style={styles.link}>Skills</Text>
                </Link>
                <Link href="/ContactPage" asChild>
                    <Text style={styles.link}>Contact</Text>
                </Link>
            </View>
        </View>
    );
}

