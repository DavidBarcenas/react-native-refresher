import React from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

const darkGray = '#2d2d2d';
const orange   = '#ff9427';

export const CalculatorScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.secondaryText}>1,500.00</Text>
            <Text style={styles.mainText}>1,500.00</Text>
            <View style={styles.row}>
                <Button text='C' color={darkGray} />
                <Button text='+/-' color={darkGray} />
                <Button text='del' color={darkGray} />
                <Button text='/' background={orange} />
            </View>
        </View>
    )
}
