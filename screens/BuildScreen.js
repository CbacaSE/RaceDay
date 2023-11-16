import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const BuildScreen = () => {
return (
    <View style={styles.container}>
    <Text style={styles.title}>BUILDS</Text>
    </View>
);
};

BuildScreen.propTypes = {
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

export default BuildScreen;