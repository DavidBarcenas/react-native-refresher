import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

export const Tab1Screen = () => {
    const {addFavoriteIcon} = useContext(AuthContext)

    return (
        <View style={{...styles.tab, backgroundColor: '#2196f3'}}>
            <TouchableOpacity onPress={() => addFavoriteIcon('rocket')}>
                <Icon name="rocket" size={50} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.tabContent}>Tab1 Screen</Text>
        </View>
    )
}
