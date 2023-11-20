// AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './AuthScreen';
import SignUp from './SignUp';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ onLogin }) => {
  return (
    <Stack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthScreen">
        {props => <AuthScreen {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      
    </Stack.Navigator>
  );
};

export default AuthNavigator;