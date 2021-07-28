import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter: {counter}</Text>
            <TouchableOpacity 
                style={[styles.fabWrap, styles.fabWrapLeft]} 
                onPress={() => setCounter(counter - 1)}> 
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.fabWrap} 
                onPress={() => setCounter(counter + 1)}> 
                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    counterText: {
        fontSize: 30
    },
    fabWrap: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabWrapLeft: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856d6',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
    },
    fabText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})