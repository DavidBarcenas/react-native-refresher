import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export const MapScreen = () => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      err => console.log(err),
      {
        enableHighAccuracy: true
      }
    )
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          image={require('../assets/img/custom-marker.png')}
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          title='Here'
          description='my desc'
        />
      </MapView>
    </View>
  )
}
