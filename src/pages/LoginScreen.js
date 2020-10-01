import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, ImageBackground, StatusBar } from 'react-native';
// importando componentes
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import ForgotPassword from '../components/ForgotPassword';
import Form from '../components/Form';

// importando imagens
import bgLogin from '../../assets/images/travel-bg.jpg'
import LoginButton from '../components/LoginButton';



export default class App extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
  }
  render(){
    return (
          <ImageBackground source={bgLogin} style={{ width: '100%', height: '100%', flex: 1, resizeMode: 'cover'}}>
            <KeyboardAvoidingView behavior={'height'} style={styles.container}>
              <StatusBar hidden />
              <Header/>
              <Form></Form>
              <LoginButton/>
              {/* <ForgotPassword></ForgotPassword> */}
            </KeyboardAvoidingView>
          </ImageBackground>
          
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});