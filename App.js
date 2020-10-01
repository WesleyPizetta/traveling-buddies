// App.js
import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/HomeScreen'
import LoginScreen from './src/pages/LoginScreen'




const MainNavigator = createStackNavigator(
  {
  Login: {screen: LoginScreen},
  Home: 
  {
    screen: HomeScreen,
    title: 'Pindamanhangaba'
  },
  },
  {
    initialRouteName: 'Login',
  }
);


const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

