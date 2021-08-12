import React, { useState } from 'react'
import { Dimensions, View } from 'react-native';
import { 
    Keyboard, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback 
} from 'react-native';

const height = Dimensions.get('window').height

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{flex: 1}}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View >
                        <TextInput
                            style={styles.input}
                            placeholder='Write your name'
                            autoCapitalize='words'
                            onChangeText={value => onChange(value, 'name')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Write your email'
                            autoCapitalize='none'
                            onChangeText={value => onChange(value, 'email')}
                            keyboardType='email-address'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Write your phone'
                            onChangeText={value => onChange(value, 'phone')}
                            keyboardType='number-pad'
                        />
                        <Text style={styles.showData}>
                            {JSON.stringify(form, null, 4)}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    showData: {
        fontSize: 16
    }
  });