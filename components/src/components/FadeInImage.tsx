import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, RegisteredStyle, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { StyleProp } from 'react-native';

interface Props {
   uri: string;
   style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({uri, style}: Props) => {
    const {opacity, fadeIn} = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    const onLoadEnd = () => {
        setIsLoading(false)
        fadeIn()
    }

    return (
        <View>
            {
                isLoading && <ActivityIndicator size={30} color='purple' />
            }
            <Animated.Image 
                source={{uri}}
                onLoadEnd={onLoadEnd}
                style={[style, {opacity}]}
            />
        </View>
    )
}
