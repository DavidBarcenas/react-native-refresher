import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

interface Props {
    title: string;
    position?: 'bottom-right' | 'bottom-left';
    onPress: () => void;
}

export const Fab = ({title, onPress, position = 'bottom-right'}: Props) => {
    return (
        <View style={[styles.fabWrap, (position === 'bottom-right' ? styles.right : styles.left)]} >
            <TouchableNativeFeedback 
                onPress={onPress} 
                background={TouchableNativeFeedback.Ripple('5755d1', false, 30)}> 
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    fabWrap: {
        position: 'absolute',
        bottom: 25,
    },
    right: { 
        right: 20 
    },
    left: { 
        left: 20
    },
    fab: {
        backgroundColor: '#5856d6',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})