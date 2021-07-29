import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

const darkGray = '#2d2d2d';
const orange   = '#ff9427';

enum Operators {add, substract, multiply, divide}

export const CalculatorScreen = () => {
    const [currentNumber, setCurrentNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')
    const operation = useRef<Operators>()

    const reset = () => {
        setCurrentNumber('0')
        setPrevNumber('0')
    }

    const builNumber = (digit: string) => {
        //  do no accept dobule point
        if(currentNumber.includes('.') && digit === '.') return;

        if(currentNumber.startsWith('0') || currentNumber.startsWith('-0')) {
            // decimal point
            if(digit === '.') {
                setCurrentNumber(currentNumber + digit)
            } else if(digit === '0' && currentNumber.includes('.')) {
                // Exists zero or point
                setCurrentNumber(currentNumber + digit)
            } else if(digit !== '0' && !currentNumber.includes('.')) {
                // validate if it is different from zero and has no point
                setCurrentNumber(digit)
            } else if(digit === '0' && !currentNumber.includes('.')) {
                //  avoid multiple leading zeros
                setCurrentNumber(currentNumber)
            } else {
                setCurrentNumber(currentNumber + digit)
            }
        } else {
            setCurrentNumber(currentNumber + digit)
        }

    }

    const positiveNegative = () => {
        if(currentNumber.includes('-')) {
            setCurrentNumber(currentNumber.replace('-', ''))
        } else {
            setCurrentNumber('-' + currentNumber)
        }
    }

    const deleteDigit = () => {
        if(currentNumber.length > 1) {
            if(currentNumber.length <= 2 && currentNumber.includes('-')) {
                setCurrentNumber('0')
            } else {
                setCurrentNumber(currentNumber.slice(0, -1))
            }
        } else {
            setCurrentNumber('0')
        }
    }

    const numberHistory = () => {
        if(currentNumber.endsWith('.')) {
            setPrevNumber(currentNumber.slice(0, -1))
        } else {
            setPrevNumber(currentNumber)
        }
        setCurrentNumber('0')
    }

    const handleDivision = () => {
        numberHistory()
        operation.current = Operators.divide
    }
    const handleMultiplication = () => {
        numberHistory()
        operation.current = Operators.multiply
    }
    const handleSubtraction = () => {
        numberHistory()
        operation.current = Operators.substract
    }
    const handleSum = () => {
        numberHistory()
        operation.current = Operators.add
    }

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
                <Button onPress={reset} text='=' background={orange} />
            </View>
        </View>
    )
}
