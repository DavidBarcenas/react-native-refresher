import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Product } from '../Screens/Product';
import { Products } from '../Screens/Products';

export type ProductStackParams = {
  Products: undefined;
  Product: { id?: string; name?: string };
};

const Stack = createStackNavigator<ProductStackParams>();

export const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ title: 'Product' }}
      />
    </Stack.Navigator>
  );
};
