import React from 'react'
import { Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
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
