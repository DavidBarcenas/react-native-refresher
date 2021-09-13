import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { openSettings } from 'react-native-permissions'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
      <Text style={styles.text}>We need to have access to geolocation to be able to use the maps.</Text>
      <Text style={styles.text}>Press the button and accept access to your location.</Text>
      <TouchableOpacity onPress={handleRequest}>
        <View style={styles.button}>
          <Icon name="navigation" color="#fff" size={40} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2979ff',
    borderRadius: 10,
    width: 80,
    height: 80
  }
})