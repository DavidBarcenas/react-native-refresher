import React, { createContext, useState } from 'react';
import {
  PermissionContextProps,
  PermissionProviderProps,
  PermissionState
}
  from '../types/context';

const initialState: PermissionState = {
  locationStatus: 'unavailable'
}

const PermissionContext = createContext({} as PermissionContextProps)

export const PermissionProvider = ({ children }: PermissionProviderProps) => {
  const [permissions, setPermissions] = useState(initialState)

  const askLocationPermission = () => { }
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