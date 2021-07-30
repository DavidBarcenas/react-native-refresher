import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter: {counter}</Text>
            <Fab title="-1" onPress={() => setCounter(counter - 1)} position='bottom-left' />
            <Fab title="+1" onPress={() => setCounter(counter + 1)} />
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
})