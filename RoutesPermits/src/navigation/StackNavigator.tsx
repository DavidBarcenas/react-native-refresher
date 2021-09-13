import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
