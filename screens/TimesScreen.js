import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

//{ navigation } between parenthesis on TimesScreen
const TimesScreen = () => {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome to the TIMES Screen!</Text>
    </View>
);
};

TimesScreen.propTypes = {
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

export default TimesScreen;