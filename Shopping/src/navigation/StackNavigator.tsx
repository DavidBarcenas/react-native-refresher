import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../Screens/Login';
import { Register } from '../Screens/Register';
import { Protected } from '../Screens/Protected';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="protected" component={Protected} />
    </Stack.Navigator>
  );
};
