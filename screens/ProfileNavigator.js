import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigator = ({ onLogout }) => {
  
  // const handleLogout = () => {
  //   // Perform any logout logic here; clear tokens, etc.
  //   console.log('Logging out...');
  //   onLogout();
  //   // Navigate to the authentication screen
  //   navigation.navigate('AuthScreen');
  // };
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen">
      {props => <ProfileScreen {...props} onLogout={onLogout} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
