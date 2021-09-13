import React, { createContext, useEffect, useState } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

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

  const handleAppState = (state: AppStateStatus): void => {
    if (state !== 'active') {
      return;
    }

    checkLocationPermission()
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppState)

    return () => {
      AppState.removeEventListener('change', handleAppState)
    }
  }, [])

  const askLocationPermission = async (): Promise<void> => {
    let locationPermission: PermissionStatus;

    if (Platform.OS === 'ios') {
      locationPermission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else {
      locationPermission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    }

    setPermissions({
      ...permissions,
      locationStatus: locationPermission
    })
  }

  const checkLocationPermission = async (): Promise<void> => {
    let locationPermission: PermissionStatus;

    if (Platform.OS === 'ios') {
      locationPermission = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else {
      locationPermission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    }

    setPermissions({
      ...permissions,
      locationStatus: locationPermission
    })
  }

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