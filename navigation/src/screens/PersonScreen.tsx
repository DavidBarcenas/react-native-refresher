import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigation/StackNavigator';

// interface RouteParams {
//     id: number;
//     name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({navigation, route}: Props) => {
    // const params = route.params as RouteParams
    const {id, name} = route.params

    useEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PersonScreen</Text>
            <Text style={styles.title}>{id} - {name}</Text>
            <Button title="Go to page 2" onPress={() => navigation.navigate('Page2Screen')} />
        </View>
    )
}
