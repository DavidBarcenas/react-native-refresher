import React, { useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';

export const AnimationScreen = () => {
    const opacity = useRef(new Animated.Value(0)).current
    const top = useRef(new Animated.Value(-100)).current

    const fadeIn = (start = true) => {
        Animated.timing(opacity, {
            toValue: start ? 1 : 0,
            duration: 300,
            useNativeDriver: true
        }).start(() => console.log('end animation'))
        
        Animated.timing(top, {
            toValue: start ? 0 : -150,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View 
                style={{
                    ...styles.box,
                    opacity,
                    transform: [{
                        translateY: top
                    }]
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