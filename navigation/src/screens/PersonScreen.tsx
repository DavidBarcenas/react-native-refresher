import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const PersonScreen = ({navigation, route}: Props) => {
    useEffect(() => {
        navigation.setOptions({
            title: route?.params?.name
        })
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PersonScreen</Text>
            <Text style={styles.title}>{route?.params?.id} - {route?.params?.name}</Text>
            <Button title="Go to page 2" onPress={() => navigation.navigate('Page2Screen')} />
        </View>
    )
}
