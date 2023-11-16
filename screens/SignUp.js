import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const SignUp = () => {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to the SIGNUP Screen!</Text>
    <Button title="SignUp"  />
    </View>
);
};

SignUp.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default SignUp;