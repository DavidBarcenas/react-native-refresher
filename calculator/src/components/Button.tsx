import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    text: string;
    color?: string;
    background?: string;
    extend?: boolean;
    onPress: (action: string) => void;
}

export const Button = ({
    background = '#9b9b9b', 
    color = '#fff',
    extend = false,
    text, 
    onPress
} : Props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(text)}>
            <View style={{
                ...styles.button, 
                backgroundColor: background, 
                width: extend ? 180 : 80
            }}>
                <Text style={{...styles.buttonText, color}}>{text}</Text>
            </View>
        </TouchableOpacity>
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