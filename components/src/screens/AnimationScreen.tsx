import React, { useRef } from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native';

export const AnimationScreen = () => {
    const opacity = useRef(new Animated.Value(0)).current

    const fadeIn = (start = true) => {
        Animated.timing(opacity, {
            toValue: start ? 1 : 0,
            duration: 300,
            useNativeDriver: true
        }).start(() => console.log('end animation'))
    }

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{
                    ...styles.box,
                    opacity
                }} 
            />
            <Button title="Fade In" onPress={() => fadeIn(true)} />
            <Button title="Fade Out" onPress={() => fadeIn(false)} />
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