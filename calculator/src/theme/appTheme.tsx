import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    mainText: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right'
    },
    secondaryText: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#333',
        borderRadius: 100,
        justifyContent: 'center',
    },
    buttonText: {   
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    }
})