import React from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigation } from './StackNavigator';
import { Text, Platform } from 'react-native';

export const TabNavigator = () => {
  return Platform.OS === 'ios' ? <TabIOS /> : <TabIOS />
}

const createTabIOS = createBottomTabNavigator();

const TabIOS = () => {
  return (
    <createTabIOS.Navigator 
      tabBarOptions={{
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
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
      })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Blue', tabBarIcon: (props) => tabIcon(props)}} component={Tab1Screen} /> */}
      <createTabIOS.Screen name="Tab1Screen" options={{title: 'Blue'}} component={Tab1Screen} />
      <createTabIOS.Screen name="Tab2Screen" options={{title: 'Purple'}}  component={Tab2Screen} />
      <createTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigation} />
    </createTabIOS.Navigator>
  )
}

// const tabIcon = (props:any) => {
//   return (
//     <Text style={{color: props.color}}>T1</Text>
//   )
// }