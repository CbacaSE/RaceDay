import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

const AuthScreen = ({ navigation }) => {
return (
    <ImageBackground 
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#101010',
            }}
            source={require('../assets/racedaylogoalt.png')}
            resizeMode='contain'
        >
    <View>
    <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
        backgroundColor: '#2F243A',
        padding:20,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:500,
    }}>
    <Text 
        style={{
        fontWeight:'bold',
        fontSize: 18,
        color: '#FFF',
    }}>
    Start Your Engines!
    </Text>
    <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"/>
    </TouchableOpacity>
    </View>

    <View>
    <Text
        style={{
            fontWeight:'bold',
            fontSize:12,
            color:'#fff',
        }}>
        Dont have an account?
    </Text>
    <Text
        style={{
            fontWeight:'bold',
            fontSize:14,
            color:'#00A6ED',
        }}>
        SIGN UP!
    </Text>
    </View>
    </ImageBackground>
    );
}


AuthScreen.propTypes = {
    navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    }).isRequired,
};  

export default AuthScreen;