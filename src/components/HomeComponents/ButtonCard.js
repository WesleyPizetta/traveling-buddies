import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { Button } from 'react-native-elements'
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types'

export default class ButtonCard extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Card 
                title={this.props.cardTitle} 
                titleStyle={{ color: 'white'}}
                containerStyle={styles.cardStyle}>
                {/*react-native-elements Card*/}
                    <Button
                        buttonStyle={styles.buttonStyle}
                        title={this.props.title}
                    />
            </Card>
        </View>
        )
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired
    
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
    buttonStyle: {
        backgroundColor: '#0e635c'
    },
    cardStyle: {
        width: 315, 
        height: 215, 
        backgroundColor: '#143a41', 
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#052129',
    },
    
  });

//   borderBottomWidth: 3,
//         borderBottomColor: '#bebebe',