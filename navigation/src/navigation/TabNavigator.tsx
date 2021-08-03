import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigation } from './StackNavigator';
import { Text, Platform } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';

export const TabNavigator = () => Platform.OS === 'ios' ? <BottomTabIOS /> : <BottomTabAndroid />

const TabAndroid = createMaterialBottomTabNavigator();
const TabIOS = createBottomTabNavigator();

const BottomTabAndroid = () => {
  return (
    <TabAndroid.Navigator 
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: '#2196f3'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string;

          switch (route.name) {
            case 'Tab1':
              iconName = 'cloudy'
              break;
            case 'Tab2':
              iconName = 'diamond'
              break;
            default:
              iconName = 'cube'
              break;
          }
          return <Icon name={iconName} size={20} color="#fff" />
        }
      })}>
      <TabAndroid.Screen name="Tab1" component={Tab1Screen} />
      <TabAndroid.Screen name="TopTab" component={TopTapNavigator} />
      <TabAndroid.Screen name="Stack" component={StackNavigation} />
    </TabAndroid.Navigator>
  );
}

const BottomTabIOS = () => {
  return (
    <TabIOS.Navigator 
      tabBarOptions={{
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string;

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 't1'
              break;
            case 'Tab2Screen':
              iconName = 't2'
              break;
            default:
              iconName = 'start'
              break;
          }
          return <Text style={{color}}>{iconName}</Text>
        }
      })}>
      <TabIOS.Screen name="Tab1Screen" options={{title: 'Blue'}} component={Tab1Screen} />
      <TabIOS.Screen name="TopTab" options={{title: 'Purple'}}  component={TopTapNavigator} />
      <TabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigation} />
    </TabIOS.Navigator>
  )
}