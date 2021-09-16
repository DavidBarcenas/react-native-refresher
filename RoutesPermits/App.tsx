import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigation/StackNavigator';
import { PermissionProvider } from './src/context/PermissionContext';

const App = () => {
  return (
    <NavigationContainer>
      <PermissionProvider>
        <StackNavigator />
      </PermissionProvider>
    </NavigationContainer>
  )
}

export default App