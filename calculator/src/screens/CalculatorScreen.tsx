import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

const darkGray = '#2d2d2d';
const orange   = '#ff9427';

export const CalculatorScreen = () => {
    const [currentText, setCurrentText] = useState('0')
    const [prevText, setPrevText] = useState('0')

    const reset = () => setCurrentText('0')

    const builNumber = (num: string) => {
        //  do no accept dobule point
        if(currentText.includes('.') && num === '.') return;

        if(currentText.startsWith('0') || currentText.startsWith('-0')) {
            // decimal point
            if(num === '.') {
                setCurrentText(currentText + num)
            } else if(num === '0' && currentText.includes('.')) {
                // Exists zero or point
                setCurrentText(currentText + num)
            } else if(num !== '0' && !currentText.includes('.')) {
                // validate if it is different from zero and has no point
                setCurrentText(num)
            } else if(num === '0' && !currentText.includes('.')) {
                //  avoid multiple leading zeros
                setCurrentText(currentText)
            } else {
                setCurrentText(currentText + num)
            }
        } else {
            setCurrentText(currentText + num)
        }

    }

    const positiveNegative = () => {
        if(currentText.includes('-')) {
            setCurrentText(currentText.replace('-', ''))
        } else {
            setCurrentText('-' + currentText)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.secondaryText}>{prevText}</Text>
            <Text style={styles.mainText} numberOfLines={1} adjustsFontSizeToFit>{currentText}</Text>
            <View style={styles.row}>
                <Button onPress={reset} text='C' color={darkGray} />
                <Button onPress={positiveNegative} text='+/-' color={darkGray} />
                <Button onPress={reset} text='del' color={darkGray} />
                <Button onPress={reset} text='/' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='7' background={darkGray} />
                <Button onPress={builNumber} text='8' background={darkGray} />
                <Button onPress={builNumber} text='9' background={darkGray} />
                <Button onPress={reset} text='X' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='4' background={darkGray} />
                <Button onPress={builNumber} text='5' background={darkGray} />
                <Button onPress={builNumber} text='6' background={darkGray} />
                <Button onPress={reset} text='-' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='1' background={darkGray} />
                <Button onPress={builNumber} text='2' background={darkGray} />
                <Button onPress={builNumber} text='3' background={darkGray} />
                <Button onPress={reset} text='+' background={orange} />
            </View>
            <View style={styles.row}>
                <Button onPress={builNumber} text='0' background={darkGray} extend />
                <Button onPress={builNumber} text='.' background={darkGray} />
                <Button onPress={reset} text='=' background={orange} />
            </View>
        </View>
    )
}
