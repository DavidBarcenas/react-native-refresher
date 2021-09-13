import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { MapScreen } from '../screens/MapScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { PermissionContext } from '../context/PermissionContext';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { permissions } = useContext(PermissionContext)

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      {
        permissions.locationStatus === 'granted'
          ? <Stack.Screen name="Map" component={MapScreen} />
          : <Stack.Screen name="Permissions" component={PermissionsScreen} />
      }
    </Stack.Navigator>
  )
}
