import React, { useState } from 'react'
import { Switch } from 'react-native'

interface SwitchProps {
    isEnabled: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isEnabled, onChange}: SwitchProps) => {
    const [enabled, setEnabled] = useState(isEnabled);
    const toggleSwitch = () => {
        setEnabled(previousState => !previousState)
        onChange(!enabled)
    }

    return (
        <Switch
            trackColor={{ false: "#d9d9db", true: "#536dfe" }}
            thumbColor={enabled ? "#ff4081" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={enabled}
        />
    )
}
