import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10)

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{fontSize: 30}}>Counter: {counter}</Text>
            <Button
                onPress={() => setCounter(counter + 1)}
                title="+1"
                color="#841584"
                accessibilityLabel="Add one"
            />
        </View>
    )
}
