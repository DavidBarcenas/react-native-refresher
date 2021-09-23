import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Background } from '../components/Background';
import { ReactLogo } from '../components/ReactLogo';
import { loginStyles } from '../theme/login';

export const Login = () => {
  return (
    <>
      <Background />
      <View style={loginStyles.formContainer}>
        <ReactLogo />
        <Text style={loginStyles.title}>Login</Text>

        <Text style={loginStyles.label}>Email:</Text>
        <TextInput
          placeholder="example@mail.com"
          placeholderTextColor='rgba(255,255,255,0.4)'
          keyboardType='email-address'
          underlineColorAndroid='#fff'
          selectionColor='#fff'
          autoCapitalize='none'
          autoCorrect={false}
        />

        <Text style={loginStyles.label}>Password:</Text>
        <TextInput
          placeholder="******"
          placeholderTextColor='rgba(255,255,255,0.4)'
          underlineColorAndroid='#fff'
          selectionColor='#fff'
        />

        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={loginStyles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
