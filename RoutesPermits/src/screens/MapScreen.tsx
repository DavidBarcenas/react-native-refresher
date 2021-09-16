import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps';
import { View } from 'react-native'

import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from './LoadingScreen';
import { Fab } from '../components/Fab';

export const MapScreen = () => {
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    userPosition,
    followUserPosition,
    stopFollowUserPosition,
    routeLine
  } = useLocation()
  const mapViewRef = useRef<MapView | null>()
  const following = useRef<boolean>(true)
  const [showPolyline, setshowPolyline] = useState(false)

  const goToUserPosition = async () => {
    const coords = await getCurrentLocation()

    following.current = true

    mapViewRef.current?.animateCamera({
      center: coords
    })

  }

  useEffect(() => {
    followUserPosition()
    return () => {
      stopFollowUserPosition()
    }
  }, [])

  useEffect(() => {
    if (following.current) {
      mapViewRef.current?.animateCamera({
        center: userPosition
      })
    }
  }, [userPosition])

  if (!hasLocation) {
    return <LoadingScreen />
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={el => mapViewRef.current = el}
        style={{ flex: 1 }}
        showsUserLocation
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => following.current = false}
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
        {
          showPolyline &&
          <Polyline coordinates={routeLine} strokeColor="black" strokeWidth={3} />
        }
      </MapView>
      <Fab iconName="explore" onPress={(goToUserPosition)} />
      <Fab iconName="brush" onPress={() => { setshowPolyline(prev => !prev) }} style={{ bottom: 80 }} />
    </View>
  )
}
