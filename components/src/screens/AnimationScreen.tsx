import React from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const AnimationScreen = () => {
    const {opacity, position, fadeIn, changePosition} = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{
                    ...styles.box,
                    opacity,
                    transform: [{
                        translateY: position
                    }]
                }} 
            />
            <Button title="Fade In" onPress={() => {
                fadeIn(true)
                changePosition()
            }} />
            <Button title="Fade Out" onPress={() => { fadeIn(false) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150,
        marginBottom: 20
    }
})