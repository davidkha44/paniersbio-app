import 'react-native-gesture-handler';
import React, { useState, useCallback, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mongodb from 'mongodb';

import AppNavigation from './components/AppNavigation';
import Auth from './components/Auth';

interface AuthContextInterface {
  isLoggedIn: Boolean;
  userId: mongodb.ObjectID | null;
  token: string | null;
  login: (uid: any, token: any) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextInterface);

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<mongodb.ObjectId | null>(null);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let navi;
  if (token) {
    navi = <AppNavigation />;
  } else {
    navi = <Auth />;
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
        <NavigationContainer>{navi}</NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}
