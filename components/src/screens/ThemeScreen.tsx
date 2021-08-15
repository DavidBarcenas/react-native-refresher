import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';

export const ThemeScreen = () => {
    return (
        <View style={{
            backgroundColor: '#fff', 
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity 
                activeOpacity={0.8}
                style={{
                    backgroundColor: 'tomato',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 5
                }}
            >
                <Text style={{fontSize: 20, color: '#fff'}}>Light / Dark</Text>
            </TouchableOpacity>
        </View>
    )
}
