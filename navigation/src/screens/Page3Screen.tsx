import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page3Screen</Text>
            <Button title="Go back 1" onPress={() => navigation.pop()} />
            <Button title="Go to Page1" onPress={() => navigation.popToTop()} />
        </View>
    )
}
