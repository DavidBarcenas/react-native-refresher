import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity 
                    onPress={() => navigation.toggleDrawer()}
                    style={{paddingLeft: 20}}>
                    <Icon name='menu' size={20} color="#000" />
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page1Screen</Text>
            <Button title="Go to page 2" onPress={() => navigation.navigate('Page2Screen')} />
            <Button 
                title="Go to person" 
                onPress={() => navigation.navigate('PersonScreen', {
                    id: 1,
                    name: 'David'
                })} />
            <Button 
                title="Go to person 2" 
                onPress={() => navigation.navigate('PersonScreen', {
                    id: 2,
                    name: 'Susana'
                })} />
        </View>
    )
}
