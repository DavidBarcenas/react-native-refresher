import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
                      iconName = 'analytics'
                      break;
                    case 'Tab2':
                      iconName = 'bookmark'
                      break;
                    default:
                      iconName = 'cellular'
                      break;
                  }
                  return <Icon name={iconName} size={20} color="#673ab7" />
                }
              })}>
            <Tab.Screen name="Tab1" component={Tab1Screen} />
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}
