import React from 'react';
import { View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AuthScreen = ({ navigation, onLogin}) => {
    const handleStartEngines = () => {
      // authentication logic here; onLogin function called here:
        onLogin();
      // home screen navigation
        navigation.navigate('Home');
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

return (
    <ImageBackground
        style={styles.container}
        source={require('../assets/racedaylogoalt.png')}
        resizeMode='contain'
    >
    <View style={styles.buttonContainer}>
    <TouchableOpacity
            onPress={handleStartEngines}
            style={styles.button}
        >
    <Text style={styles.buttonText}>
        Start Your Engines!
    </Text>
    <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
    </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
            Don't have an account?
        </Text>
        <Text style={styles.signupLink} onPress={handleSignUp}>
            SIGN UP!
        </Text>
        </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010',
    },
    buttonContainer: {
        marginTop: 500,
    },
    button: {
        backgroundColor: '#2F243A',
        padding: 20,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
    },
    signupContainer: {
        marginTop: 20,
    },
    signupText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#fff',
    },
    signupLink: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#00A6ED',
    },
});

export default AuthScreen;