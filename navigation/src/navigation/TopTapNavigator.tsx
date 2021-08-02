import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab3" component={Tab1Screen} />
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}
