import React from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

const darkGray = '#2d2d2d';
const orange   = '#ff9427';

export const CalculatorScreen = () => {
    const {
        positiveNegative,
        deleteDigit,
        handleDivision,
        handleMultiplication,
        handleSubtraction,
        handleSum,
        calculate,
        builNumber,
        currentNumber,
        prevNumber,
        reset
    } = useCalculator()
    
    return (
        <View style={styles.container}>
            {
                prevNumber !== '0' &&
                <Text style={styles.secondaryText}>{prevNumber}</Text>
            }
            <Text style={styles.mainText} numberOfLines={1} adjustsFontSizeToFit>{currentNumber}</Text>
            <View style={styles.row}>
                <Button onPress={reset} text='C' color={darkGray} />
                <Button onPress={positiveNegative} text='+/-' color={darkGray} />
                <Button onPress={deleteDigit} text='del' color={darkGray} />
                <Button onPress={handleDivision} text='/' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='7' background={darkGray} />
                <Button onPress={builNumber} text='8' background={darkGray} />
                <Button onPress={builNumber} text='9' background={darkGray} />
                <Button onPress={handleMultiplication} text='X' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='4' background={darkGray} />
                <Button onPress={builNumber} text='5' background={darkGray} />
                <Button onPress={builNumber} text='6' background={darkGray} />
                <Button onPress={handleSubtraction} text='-' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='1' background={darkGray} />
                <Button onPress={builNumber} text='2' background={darkGray} />
                <Button onPress={builNumber} text='3' background={darkGray} />
                <Button onPress={handleSum} text='+' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='0' background={darkGray} extend />
                <Button onPress={builNumber} text='.' background={darkGray} />
                <Button onPress={calculate} text='=' background={orange} />
            </View>
        </View>
    )
}
