import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigation/StackNavigator';
import { AuthProvider } from './src/context/authContext';
import { ProductProvider } from './src/context/ProductContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ProductProvider>
          <StackNavigator />
        </ProductProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
