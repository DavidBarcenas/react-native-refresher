import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

interface Props {
    text: string;
    color?: string;
    background?: string;
}

export const Button = ({
    background = '#9b9b9b', 
    color = '#fff',
    text, 
} : Props) => {
    return (
        <View style={{...styles.button, backgroundColor: background}}>
            <Text style={{...styles.buttonText, color}}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    buttonText: {   
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})