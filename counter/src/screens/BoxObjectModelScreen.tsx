import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const BoxObjectModelScreen = () => {
    const {width, height} = useWindowDimensions()

    return (
        <View style={styles.box}>
            <View style={styles.purpleBox}></View>
            <View style={styles.orangeBox}></View>
            <View style={styles.blueBox}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    box: {
        backgroundColor: '#28425b',
        height: height,
        justifyContent: 'space-between'
    },
    purpleBox: {
        alignSelf: 'flex-end',
        backgroundColor: '#5856d6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff'
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff'
    },
    blueBox: {
        alignSelf: 'center',
        backgroundColor: 'skyblue',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})