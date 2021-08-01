import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets()

    return (
        <View style={{marginTop: insets.top}}>
            <Text style={styles.title}>Settings</Text>
        </View>
    )
}
