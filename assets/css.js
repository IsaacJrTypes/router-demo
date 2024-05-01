import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        margin: "auto",
        flexDirection: "column",
        backgroundColor:'gray',
        minHeight:"100vh",

    },
    card: {
        width: 300,
        minHeight: 50,
        margin: "auto",
        backgroundColor:"green"
    },
    navCenter: {
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        width: 300,
        minHeight:50,
        margin: "auto",
        justifyContent:"space-between"
    },
    link: {
        color: "blue"
    },
    testing: {
        backgroundColor:"orange",
        minHeight:200
    }
});