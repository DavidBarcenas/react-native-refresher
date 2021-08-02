import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
export const Tab1Screen = () => {
    return (
        <View style={{...styles.tab, backgroundColor: '#2196f3'}}>
            <Icon name="rocket" size={50} color="#fff" />
            <Text style={styles.tabContent}>Tab1 Screen</Text>
        </View>
    )
}
