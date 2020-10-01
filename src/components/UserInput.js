import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import PropTypes from 'prop-types'
  
export default class UserInput extends Component {
  render(){
    return(
        <View style={styles.inputWrapper}>
           <Image source={this.props.source} style={styles.inlineImg} />
                <TextInput
                    style={styles.input}
                    textContentType={this.props.textContentType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                />
            </View>
            // <View>
            //     <Button
            //         icon={
            //             <Icon
            //                 name="arrow-right"
            //                 size={15}
            //                 color="white"
            //             />
            //         }
            //         title=' LOGIN'
            //         buttonStyle={styles.loginButton}
            //     />
            // </View>
    )}
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: 250,
      height: 40,
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 12,
      color: '#ffffff',
    },
    inputWrapper: {
        marginBottom: 10
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 22,
      height: 22,
      left: 35,
      top: 9,
    },
  });
  
UserInput.propTypes = {
    textContentType: PropTypes.string,
    source: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string, 
}