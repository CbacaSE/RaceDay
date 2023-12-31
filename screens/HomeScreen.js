import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const HomeScreen = () => {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to the Home Screen!</Text>
    {/* <Button title="Logout" onPress={() => navigation.goBack()} /> */}
    </View>
);
};

HomeScreen.propTypes = {
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

export default HomeScreen;