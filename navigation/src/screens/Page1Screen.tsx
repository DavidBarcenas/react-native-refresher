import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page1Screen</Text>
            <Button title="Go to page 2" onPress={() => navigation.navigate('Page2Screen')} />
        </View>
    )
}
