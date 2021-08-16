import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../components/customSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';
import { ThemeState } from '../context/theme/themeReducer';

export const SwitchScreen = () => {
    const { theme } = useContext(ThemeContext)

    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const onChange = (value: boolean, field: keyof typeof state) => {
        setstate({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={styles().container}>
            <View style={styles().row}>
                <Text style={styles(theme).switchText}>Active</Text>
                <CustomSwitch
                    isEnabled={state.isActive}
                    onChange={value => onChange(value, 'isActive')}
                />
            </View>
            <View style={styles().row}>
                <Text style={styles(theme).switchText}>Hungry</Text>
                <CustomSwitch
                    isEnabled={state.isHungry}
                    onChange={value => onChange(value, 'isHungry')}
                />
            </View>
            <View style={styles().row}>
                <Text style={styles(theme).switchText}>Happy</Text>
                <CustomSwitch
                    isEnabled={state.isHappy}
                    onChange={value => onChange(value, 'isHappy')}
                />
            </View>
            <Text style={styles(theme).text}>
                {JSON.stringify(state, null, 4)}
            </Text>
        </View>
    )
}

const styles = (theme?: ThemeState) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%'
    },
    switchText: {
        fontSize: 16,
        fontWeight: '700',
        color: theme?.colors.text
    },
    text: {
        fontSize: 20,
        color: theme?.colors.text
    }
});
