import { useRef } from "react"
import { Animated, Easing } from "react-native"

export const useAnimation = () => {
    const opacity  = useRef(new Animated.Value(0)).current
    const position = useRef(new Animated.Value(0)).current

    const fadeIn = (start = true) => {
        Animated.timing(opacity, {
            toValue: start ? 1 : 0,
            duration: 300,
            useNativeDriver: true
        }).start(() => console.log('end animation'))
        
    }
    
    const changePosition = (duration = 300, initPosition = -100) => {
        position.setValue(initPosition)

        Animated.timing(position, {
            toValue: 0,
            duration: duration,
            useNativeDriver: true,
            // easing: Easing.bounce
        }).start()
    }

    return {
        opacity,
        changePosition,
        position,
        fadeIn,
    }
}