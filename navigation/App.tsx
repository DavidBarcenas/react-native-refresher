import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CustomSidebar } from './src/navigation/CustomSidebar';

const App = () => {
  return (
    <NavigationContainer>
      <CustomSidebar />
    </NavigationContainer>
  )
}

export default App