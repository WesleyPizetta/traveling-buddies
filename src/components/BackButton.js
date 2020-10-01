import React, { Component } from 'react'
import { View, StyleSheet, Navigator } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'


class BackButton extends Component {
    render(){
        const { navigate } = this.props.navigation;
        return(
            <Button 
                onPress = {this.props.navigation.goBack()}
                icon={
                    <Icon
                            name="arrow-left"
                            size={15}
                            color="white"
                    />
                }
                buttonStyle={styles.inlineImg}
            />

        )
    }
}

const styles = StyleSheet.create({
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
      }
})

export default withNavigation(BackButton)