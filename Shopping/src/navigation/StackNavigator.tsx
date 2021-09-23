import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../Screens/Login';
import { Register } from '../Screens/Register';
import { Protected } from '../Screens/Protected';
import { AuthContext } from '../context/authContext';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      {status === 'authenticated' ? (
        <Stack.Screen name="protected" component={Protected} />
      ) : (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
