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
            <View style={styles.row}>
                <Button text='7' background={darkGray} />
                <Button text='8' background={darkGray} />
                <Button text='9' background={darkGray} />
                <Button text='X' background={orange} />
            </View>
            <View style={styles.row}>
                <Button text='4' background={darkGray} />
                <Button text='5' background={darkGray} />
                <Button text='6' background={darkGray} />
                <Button text='-' background={orange} />
            </View>
            <View style={styles.row}>
                <Button text='1' background={darkGray} />
                <Button text='2' background={darkGray} />
                <Button text='3' background={darkGray} />
                <Button text='+' background={orange} />
            </View>
            <View style={styles.row}>
                <Button text='0' background={darkGray} extend />
                <Button text='.' background={darkGray} />
                <Button text='=' background={orange} />
            </View>
        </View>
    )
}
