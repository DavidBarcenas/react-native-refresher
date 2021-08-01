import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
    return (
        <View style={{...styles.tab, backgroundColor: '#2196f3'}}>
            <Text style={styles.tabContent}>Tab1 Screen</Text>
        </View>
    )
}
