import React from 'react'
import { 
    Keyboard, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback, 
    View
} from 'react-native';

import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/customSwitch';

export const TextInputScreen = () => {
    const {name, email, phone, conditions, onChange} = useForm({
        name: '',
        email: '',
        phone: '',
        conditions: false
    })

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{flex: 1}}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
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
                        <View style={styles.check}>
                            <Text>Accept conditions</Text>
                            <CustomSwitch 
                                isEnabled={conditions} 
                                onChange={value => onChange(value, 'conditions')} 
                            />
                        </View>
                        <Text style={styles.showData}>
                            {JSON.stringify({name, email, phone, conditions}, null, 4)}
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
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    showData: {
        fontSize: 16
    }
  });