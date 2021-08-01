import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button 
                    title='Menu' 
                    onPress={() => navigation.toggleDrawer()} 
                />
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
