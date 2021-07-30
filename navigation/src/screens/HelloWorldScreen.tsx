import React from 'react'
import { View, Text } from 'react-native'

export const HelloWorldScreen = () => {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'steelblue'
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}>Hello World!!</Text>
        </View>
      )
}
