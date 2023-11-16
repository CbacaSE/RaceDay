import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import TimesScreen from './TimesScreen';
import EventsScreen from './EventsScreen';
import BuildScreen from './BuildScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Times" component={TimesScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Build" component={BuildScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />


      {/* Add other tabs if needed */}
    </Tab.Navigator>
  );
};

export default MainNavigator;

