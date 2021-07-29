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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
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
})