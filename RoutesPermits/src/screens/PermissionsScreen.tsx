import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'
import { PermissionContext } from '../context/PermissionContext'

export const PermissionsScreen = () => {
  const { permissions, handleLocationPermission } = useContext(PermissionContext)

  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <Button title="Allowed" onPress={() => handleLocationPermission('request')} />
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