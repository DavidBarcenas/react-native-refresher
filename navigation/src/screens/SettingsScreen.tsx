import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
    const insets = useSafeAreaInsets()
    const {authState} = useContext(AuthContext)

    return (
        <View style={{marginTop: insets.top}}>
            <Text style={styles.title}>Settings</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
        </View>
    )
}
