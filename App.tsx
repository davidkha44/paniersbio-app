import 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mongodb from 'mongodb';

import AppNavigation from './components/AppNavigation';
import AuthNavigation from './components/AuthNavigation';
import AuthContext from './components/SignUp/AuthContext';

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<mongodb.ObjectId | null>(null);

  // eslint-disable-next-line no-shadow
  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let NavComponent;
  if (token) {
    NavComponent = <AppNavigation />;
  } else {
    NavComponent = <AuthNavigation />;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}>
      <PaperProvider settings={{ icon: (props) => <Ionicons {...props} /> }}>
        <NavigationContainer>{NavComponent}</NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}
