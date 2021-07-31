import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Page2Screen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page2Screen</Text>
            <Button title="Go to page 3" onPress={() => navigation.navigate('Page3Screen')} />
        </View>
    )
}
