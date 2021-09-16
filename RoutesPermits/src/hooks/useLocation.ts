import { useEffect,useRef,useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import type { Location } from '../types/location';

const defaultPosition: Location = {
  latitude: 0,
  longitude: 0
}

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false)
  const [initialPosition, setInitialPosition] = useState<Location>(defaultPosition)
  const [userPosition, setUserPosition] = useState<Location>(defaultPosition)
  const [routeLine, setRouteLine] = useState<Location[]>([])
  const watchPositionID = useRef<number>()

  useEffect(() => {
    getCurrentLocation()
      .then(({latitude, longitude}) => {
        setInitialPosition({ latitude, longitude })
        setUserPosition({ latitude, longitude })
        setRouteLine(routes => [...routes, {latitude, longitude}])
        setHasLocation(true)
      })
      .catch(error => console.log(error))
  }, [])

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          })
        },
        err => reject(err),
        { enableHighAccuracy: true }
      )
    })
  }

  const followUserPosition = () => {
    watchPositionID.current = Geolocation.watchPosition(
      ({coords}) => {
        setUserPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
        setRouteLine(routes => [...routes, {latitude: coords.latitude, longitude: coords.longitude}])
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        distanceFilter: 10
      }
    )
  }

  const stopFollowUserPosition = () => {
    if(watchPositionID.current) {
      Geolocation.clearWatch(watchPositionID.current)
    }
  }

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserPosition,
    userPosition,
    stopFollowUserPosition,
    routeLine
  }
}