import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {
    return (
        <View style={{...styles.tab, backgroundColor: '#673ab7'}}>
            <Text style={styles.tabContent}>Tab2 Screen</Text>
        </View>
    )
}
