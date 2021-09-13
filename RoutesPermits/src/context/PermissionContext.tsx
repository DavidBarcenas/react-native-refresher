import React, { createContext, useEffect, useState } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { check, Permission, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

import type { PermissionContextProps, PermissionProviderProps, PermissionState } from '../types/context';

const initialState: PermissionState = {
  locationStatus: 'unavailable'
}

export const PermissionContext = createContext({} as PermissionContextProps)

export const PermissionProvider = ({ children }: PermissionProviderProps) => {
  const [permissions, setPermissions] = useState(initialState)

  const handleLocationPermission = async (actionType: 'request' | 'check'): Promise<void> => {
    const actions = {
      request: (permission: Permission) => request(permission),
      check: (permission: Permission) => check(permission)
    }

    let locationStatus: PermissionStatus;

    if (Platform.OS === 'ios') {
      locationStatus = await actions[actionType](PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else {
      locationStatus = await actions[actionType](PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    }

    setPermissions({ ...permissions, locationStatus })
  }

  const handleAppState = (state: AppStateStatus): void => {
    if (state !== 'active') { return; }
    handleLocationPermission('check')
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppState)

    return () => {
      AppState.removeEventListener('change', handleAppState)
    }
  }, [])

  return (
    <PermissionContext.Provider value={{
      permissions,
      handleLocationPermission,
    }}>
      {children}
    </PermissionContext.Provider>
  )
}

