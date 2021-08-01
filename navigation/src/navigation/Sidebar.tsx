import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const Sidebar = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}