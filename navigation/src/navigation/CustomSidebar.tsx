import React from 'react'
import { 
    createDrawerNavigator, 
    DrawerContentComponentProps, 
    DrawerContentOptions, 
    DrawerContentScrollView} 
from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const CustomSidebar = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SidebarNav {...props} />}>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
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
                    onPress={() => navigation.navigate('StackNavigation')}>
                    <Text style={styles.navText}>Stack Navigator</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.navItem}
                    onPress={() => navigation.navigate('SettingsScreen')}>
                    <Text style={styles.navText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}