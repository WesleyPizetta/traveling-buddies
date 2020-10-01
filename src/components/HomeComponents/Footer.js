import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

class Footer extends Component {
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Button
                    buttonStyle={{ backgroundColor: '#143a41' }}
                    title="SAIR"
                    onPress={() => navigate('Login')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 119,
        justifyContent: 'center',
        alignContent: 'flex-end',
        marginBottom: null
    }
})

export default withNavigation(Footer);