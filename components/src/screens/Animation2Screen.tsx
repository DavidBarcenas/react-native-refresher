import React, { useRef } from 'react'
import { Animated, StyleSheet, View, PanResponder } from 'react-native';

export const Animation2Screen = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan.x, dy: pan.y },
            ],
            {useNativeDriver: false}
        ),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }
            ).start()
        }
    })
    
    return (
        <View style={styles.container}>
            <Animated.View 
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box]} 
            />
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
        backgroundColor: 'tomato',
        width: 150,
        height: 150,
        marginBottom: 20
    }
})