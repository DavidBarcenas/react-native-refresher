import React, { createContext, useState } from 'react';
import { Platform } from 'react-native';
import { PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

import type {
  PermissionContextProps,
  PermissionProviderProps,
  PermissionState
} from '../types/context';

const initialState: PermissionState = {
  locationStatus: 'unavailable'
}

export const PermissionContext = createContext({} as PermissionContextProps)

export const PermissionProvider = ({ children }: PermissionProviderProps) => {
  const [permissions, setPermissions] = useState(initialState)

  const askLocationPermission = async () => {
    let locationStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      // permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
      locationStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else {
      // permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      locationStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    }

    setPermissions({ ...permissions, locationStatus })
  }

  const checkLocationPermission = () => { }

  return (
    <PermissionContext.Provider value={{
      permissions,
      askLocationPermission,
      checkLocationPermission
    }}>
      {children}
    </PermissionContext.Provider>
  )
}