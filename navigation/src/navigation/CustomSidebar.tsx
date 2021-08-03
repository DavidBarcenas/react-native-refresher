import React from 'react'
import { 
    createDrawerNavigator, 
    DrawerContentComponentProps, 
    DrawerContentOptions, 
    DrawerContentScrollView} 
from '@react-navigation/drawer';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SettingsScreen } from '../screens/SettingsScreen';
import { TabNavigator } from './TabNavigator';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const CustomSidebar = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SidebarNav {...props} />}>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const SidebarNav = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <DrawerContentScrollView>
            <View>
                <Image 
                    source={{uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'}}
                    style={styles.avatar} />
            </View>
            <View style={styles.navContainer}>
                <TouchableOpacity 
                    style={styles.navItem} 
                    onPress={() => navigation.navigate('Tabs')}>
                    <Icon name='navigate' size={20} color="#2196f3" />
                    <Text style={styles.navText}>Stack Navigator</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.navItem}
                    onPress={() => navigation.navigate('SettingsScreen')}>
                    <Icon name='settings' size={20} color="#2196f3" />
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}