import React from 'react';
import {
    View,
    Text,
    BackHandler,
    ImageBackground
} from 'react-native'
import Header from '../components/HomeComponents/Header'
import ButtonCard from '../components/HomeComponents/ButtonCard'
import Footer from '../components/HomeComponents/Footer'
import { withNavigation } from 'react-navigation';
import bgHomeScreen from '../../assets/images/city-bg.jpeg'

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerShown: false,
    });

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }
    
    render(){
        return(
        <ImageBackground source={bgHomeScreen} style={{ width: '100%', height: '100%', flex: 1, resizeMode: 'cover'}}>
            <View>
                <Header></Header>
                <Footer></Footer>
            </View>
        </ImageBackground>

        )
    }
}

export default withNavigation(HomeScreen);