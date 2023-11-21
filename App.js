import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './screens/AuthNavigator';
import MainNavigator from './screens/MainNavigator';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    //authentication set to true til authentication logic is added
    setIsAuthenticated(true);
  };


  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <MainNavigator />
      ) : (
          <AuthNavigator onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
