import React from 'react'
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const Sidebar = () => {
  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen name="StackNavigation" options={{title: 'Home'}} component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}