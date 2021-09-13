import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { openSettings } from 'react-native-permissions'
import { PermissionContext } from '../context/PermissionContext'

export const PermissionsScreen = () => {
  const { permissions, handleLocationPermission } = useContext(PermissionContext)

  const handleRequest = () => {
    handleLocationPermission('request')

    if (permissions.locationStatus === 'denied' ||
      permissions.locationStatus === 'blocked') {
      openSettings()
    }

  }

  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <Button title="Allowed" onPress={handleRequest} />
      <Text>{JSON.stringify(permissions, null, 4)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})