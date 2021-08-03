import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';

import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const Tab2Screen = () => {
    const {authState, signIn, signOut} = useContext(AuthContext)

    return (
        <View style={{...styles.tab, backgroundColor: '#673ab7'}}>
            <Text style={styles.tabContent}>Tab2 Screen</Text>
            {
                !authState.isLoggedIn ? 
                <Button title='signin' onPress={signIn} color='#673ab7' /> :
                <Button title='signOut' onPress={signOut} color='#673ab7' />
            }
        </View>
    )
}
