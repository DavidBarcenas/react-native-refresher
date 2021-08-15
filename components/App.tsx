import 'react-native-gesture-handler';
import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { Navigation } from './src/navigation/StackNavigation';

const MyTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors
    },
  };

const App = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <Navigation />
        </NavigationContainer>
    )
}

export default App