import React, { useContext, useState } from 'react'
import { Switch } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';

interface SwitchProps {
    isEnabled: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isEnabled, onChange }: SwitchProps) => {
    const { theme } = useContext(ThemeContext)
    const [enabled, setEnabled] = useState(isEnabled);
    const toggleSwitch = () => {
        setEnabled(previousState => !previousState)
        onChange(!enabled)
    }

    return (
        <Switch
            trackColor={{ false: "#d9d9db", true: theme.colors.notification }}
            thumbColor={enabled ? theme.colors.primary : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={enabled}
        />
    )
}
