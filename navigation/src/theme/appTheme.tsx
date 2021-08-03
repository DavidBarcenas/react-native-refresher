import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },
    avatar: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    navContainer: {
        marginVertical: 15,
        paddingHorizontal: 20
    },
    navItem: {
        flexDirection: 'row',
        marginBottom: 10
    },
    navText: {
        fontSize: 16,
        marginLeft: 10
    },
    tab: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabContent: {
        fontSize: 30,
        color: '#fff'
    }
})