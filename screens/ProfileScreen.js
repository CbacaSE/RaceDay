// import React from 'react';
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Button,
// } from 'react-native';
// import PropTypes from 'prop-types';

// const ProfileScreen = ({ navigation, onLogout }) => {
//     const handleLogout = () => {
//       // Logout logic here; Clear tokens etc..
//         onLogout();
//       // auth screen navigation
//         navigation.navigate('AuthScreen');
//     };

// return (
//     <View style={styles.container}>
//     <Text style={styles.title}>PROFILE</Text>
//     <Button title="Logout" onPress={handleLogout} />
//     </View>
// );
// };

// ProfileScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };

// const styles = StyleSheet.create({
// container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
// });

// export default ProfileScreen;

// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';

const ProfileScreen = ({ navigation, onLogout }) => {

  const handleLogout = () => {
    // Perform any logout logic here; clear tokens, etc.
    console.log('Logging out...');
    onLogout();
    // Navigate to the authentication screen
    navigation.navigate('AuthScreen');
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>PROFILE</Text>
    //   <Button
    //     title="Logout"
    //     onPress={() => {
    //       console.log('Logging out...');
    //       navigation.navigate('AuthScreen');
    //     }}
    //   />
    // </View>

    <View style={styles.buttonContainer}>
    <TouchableOpacity
            onPress={handleLogout}
            style={styles.button}
        >
    <Text style={styles.buttonText}>
        LOGOUT
    </Text>
    </TouchableOpacity>
        </View>
  );
};

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;
