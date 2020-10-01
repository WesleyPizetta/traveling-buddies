import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../../assets/images/username.png'
import passwordImg from '../../assets/images/password.png'

import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';

export default function Form() {
      
  const [hidePassword, sethidePassword] = useState(true);
  const [eyeStyle, setEyeStyle] = useState('eye');
  var onPasswordTogglePress = () => {
    sethidePassword(!hidePassword);
    hidePassword == true ? setEyeStyle('eye-off') : setEyeStyle('eye');
  }
    return (
        <View>
            <UserInput
                source={usernameImg}
                placeholder="Username"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
                textContentType={"username"}
            />
            <UserInput 
                source={passwordImg}
                secureTextEntry={hidePassword}
                placeholder="Password"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
                textContentType={"password"}
            />
            <TouchableOpacity style={styles.eye} onPress={onPasswordTogglePress}>
                <Icon name={eyeStyle} size={25} color="white"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    eye: {
        position: 'absolute',
        zIndex: 99,
        width: 25,
        height: 25,
        left: 230,
        top: 56,
    },
}