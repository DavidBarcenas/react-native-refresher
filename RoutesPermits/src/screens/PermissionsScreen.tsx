import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { PermissionContext } from '../context/PermissionContext'

export const PermissionsScreen = () => {
  const { permissions, askLocationPermission } = useContext(PermissionContext)

  return (
    <View style={styles.container}>
      <Text>Permissions Screen</Text>
      <Button title="Allowed" onPress={askLocationPermission} />
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