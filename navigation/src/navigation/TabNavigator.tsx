import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigation } from './StackNavigator';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator 
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
      <Tab.Screen name="Tab1Screen" options={{title: 'Blue'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title: 'Purple'}}  component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigation} />
    </Tab.Navigator>
  )
}

// const tabIcon = (props:any) => {
//   return (
//     <Text style={{color: props.color}}>T1</Text>
//   )
// }