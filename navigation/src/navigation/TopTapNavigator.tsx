import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    const {top} = useSafeAreaInsets()

    return (
        <Tab.Navigator 
            style={{paddingTop: top}}
            tabBarOptions={{
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: 'tomato'
                },   
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                  let iconName: string;
        
                  switch (route.name) {
                    case 'Tab1':
                      iconName = 't1'
                      break;
                    case 'Tab2':
                      iconName = 't2'
                      break;
                    default:
                      iconName = 'start'
                      break;
                  }
                  return <Text style={{color}}>{iconName}</Text>
                }
              })}>
            <Tab.Screen name="Tab1" component={Tab1Screen} />
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}
