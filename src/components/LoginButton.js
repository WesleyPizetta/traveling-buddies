import React, { Component } from 'react'
import { View, StyleSheet, Navigator } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation'


class LoginButton extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            <Button
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title=' LOGIN'
                buttonStyle={styles.loginButton}
                onPress={() => navigate('Home')}>
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f72585',
        height: 40,
        width: 150,
        borderRadius: 20,
        zIndex: 100,
        marginTop: 15
    }
})

export default withNavigation(LoginButton);