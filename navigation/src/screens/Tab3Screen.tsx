import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab3Screen = () => {
    return (
        <View style={{...styles.tab, backgroundColor: '#e91e63'}}>
            <Text style={styles.tabContent}>Tab3 Screen</Text>
        </View>
    )
}
