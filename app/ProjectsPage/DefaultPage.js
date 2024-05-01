import {View,Text} from 'react-native'
import data from '../../assets/data'
import { Link } from 'expo-router';
import { styles } from '../../assets/css';

export default function DefaultPage() {
    return (<>
        <View style={styles.container}>
            <View style={styles.card}>
            {data.map( (obj) => {
               return( 
                   <Link key={obj.id} href={{ pathname: `/ProjectsPage/${obj.id}`}}  asChild>
               <Text >{obj.name}</Text>
                   </Link>
               )
            })}
                <Link replace href="/" style={styles.link}>Go back</Link>
            </View>
        </View>
    </>)
}