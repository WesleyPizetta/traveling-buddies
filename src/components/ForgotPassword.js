import React from 'react'
import { View, StyleSheet, Text, Linking } from 'react-native'

export default function ForgotPassword() {

    const styles = StyleSheet.create({
        container: {
            marginTop: 15,
        }
    })
    
    return(
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Forgot password?</Text>
            <Text style={{ color: 'white', textDecorationLine: "underline" }}
             onPress={() => Linking.openURL('http://optero.com.br')}
            >
                {'\t\t\t\t'} click here!
            </Text>
        </View>
    )
}