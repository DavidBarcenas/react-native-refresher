import 'react-native-gesture-handler';
import React from 'react'
import { Navigation } from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}

export default App