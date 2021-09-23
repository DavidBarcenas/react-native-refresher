import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';

import { Background } from '../components/Background';
import { ReactLogo } from '../components/ReactLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/login';

type Props = StackScreenProps<any, any>;

export const Login = ({ navigation }: Props) => {
  const { form, onChange } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const handleLogin = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <ReactLogo />
          <Text style={loginStyles.title}>Login</Text>

          <Text style={loginStyles.label}>Email:</Text>
          <TextInput
            placeholder="example@mail.com"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="#fff"
            selectionColor="#fff"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={handleLogin}
          />

          <Text style={loginStyles.label}>Password:</Text>
          <TextInput
            secureTextEntry
            placeholder="******"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="#fff"
            selectionColor="#fff"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={handleLogin}
          />

          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={handleLogin}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('register')}>
              <Text style={loginStyles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
