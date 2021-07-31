import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { PersonScreen } from '../screens/PersonScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        elevation: 0,
      },
      headerTitleAlign: 'center',
      cardStyle: {
        backgroundColor: '#fff'
      }
    }}>
      <Stack.Screen name="Page1Screen" options={{title: 'Page 1'}} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options={{title: 'Page 2'}} component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options={{title: 'Page 3'}} component={Page3Screen} />
      <Stack.Screen name="PersonScreen" options={{title: 'Person'}} component={PersonScreen} />
    </Stack.Navigator>
  );
}