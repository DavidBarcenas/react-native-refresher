import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const BoxObjectModelScreen = () => {
    const {width, height} = useWindowDimensions()

    return (
        <View style={styles.box}>
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
            <Text style={styles.title}>W: {width}</Text>
            <Text style={styles.title}>H: {height}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        height: '100%'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        height: '50%'
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        height: '40%'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})