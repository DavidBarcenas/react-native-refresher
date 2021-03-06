import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from '../context/theme/ThemeContext';

import { HomeScreen } from '../screens/HomeScreen';
import { AnimationScreen } from '../screens/AnimationScreen';
import { Animation2Screen } from '../screens/Animation2Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullRefreshScreen } from '../screens/PullRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlideScreen } from '../screens/SlideScreen';
import { ThemeScreen } from '../screens/ThemeScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                animationEnabled: true,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: theme.colors.primary
                },
                cardStyle: {
                    backgroundColor: theme.colors.background
                }
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
                <Stack.Screen name="Animation2Screen" component={Animation2Screen} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                <Stack.Screen name="AlertScreen" component={AlertScreen} />
                <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                <Stack.Screen name="PullRefreshScreen" component={PullRefreshScreen} />
                <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
                <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                <Stack.Screen name="SlideScreen" component={SlideScreen} />
                <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}