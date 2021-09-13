import { PermissionStatus } from "react-native-permissions"

export type PermissionState = {
  locationStatus: PermissionStatus
}

export type PermissionProviderProps = {
  children: React.ReactNode
}

export type PermissionContextProps = {
  permissions: PermissionState
  askLocationPermission: () => void
  checkLocationPermission: () => void
}