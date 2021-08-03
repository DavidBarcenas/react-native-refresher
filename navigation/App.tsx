import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CustomSidebar } from './src/navigation/CustomSidebar';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CustomSidebar/>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App