import { useState, useRef } from "react"

enum Operators {add, substract, multiply, divide}

export const useCalculator = () => {
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

    const calculate = () => {
        const num1 = Number(currentNumber)
        const num2 = Number(prevNumber)

        switch (operation.current) {
            case Operators.substract:
                setCurrentNumber(`${num2 - num1}`)
                break;
            case Operators.multiply:
                setCurrentNumber(`${num1 * num2}`)
                break;
            case Operators.divide:
                setCurrentNumber(`${num2 / num1}`)
                break;
                
            default:
                setCurrentNumber(`${num1 + num2}`)
            }
        operation.current = undefined
        setPrevNumber('0')
    }

    return {
        positiveNegative,
        deleteDigit,
        handleDivision,
        handleMultiplication,
        handleSubtraction,
        handleSum,
        calculate,
        currentNumber,
        prevNumber,
        builNumber,
        reset,
    }

}
