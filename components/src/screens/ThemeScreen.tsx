import React, { useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ThemeScreen = () => {
    const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext)

    const toggleTheme = () => {
        if (theme.dark) {
            setLightTheme()
        } else {
            setDarkTheme()
        }
    }

    return (
        <View style={{
            backgroundColor: '#fff',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity
                onPress={toggleTheme}
                activeOpacity={0.8}
                style={{
                    backgroundColor: 'tomato',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 5
                }}
            >
                <Text style={{ fontSize: 20, color: '#fff' }}>Light / Dark</Text>
            </TouchableOpacity>
        </View>
    )
}
