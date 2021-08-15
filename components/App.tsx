import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    </ThemeProvider>
  )
}

export default App