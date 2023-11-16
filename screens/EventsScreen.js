import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const EventsScreen = () => {
return (
    <View style={styles.container}>
    <Text style={styles.title}>EVENTS</Text>
    {/* <Button title="Logout" onPress={() => navigation.goBack()} /> */}
    </View>
);
};

EventsScreen.propTypes = {
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

export default EventsScreen;