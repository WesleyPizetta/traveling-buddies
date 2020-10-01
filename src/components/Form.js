import React from 'react';
import { View } from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../../assets/images/username.png'
import passwordImg from '../../assets/images/password.png'


export default function Form() {
    return (
        <View>
            <UserInput
                source={usernameImg}
                placeholder="Insert your username here"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
            />
            <UserInput 
                source={passwordImg}
                secureTextEntry={true}
                placeholder="Insert your password here"
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}                
            />
        </View>
    )
}