import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native'

import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from './LoadingScreen';

export const MapScreen = () => {
  const { hasLocation, initialPosition } = useLocation()

  if (!hasLocation) {
    return <LoadingScreen />
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          image={require('../assets/img/custom-marker.png')}
          coordinate={{
            latitude: initialPosition.latitude,
            longitude: initialPosition.longitude,
          }}
          title='Here'
          description='my desc'
        />
      </MapView>
    </View>
  )
}
