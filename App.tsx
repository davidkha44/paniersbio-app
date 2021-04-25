import 'react-native-gesture-handler';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import mongodb from 'mongodb';
import * as Keychain from 'react-native-keychain';

import AppNavigation from './components/AppNavigation';
import AuthNavigation from './components/AuthNavigation';
import AuthContext from './components/Auth/AuthContext';
import ThemeContext from './components/Auth/ThemeContext';

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};
const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<mongodb.ObjectId | null | string>(null);
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  const login = useCallback((uid, tkn) => {
    setToken(tkn);
    setUserId(uid);
    Keychain.setGenericPassword(uid, tkn);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    Keychain.resetGenericPassword();
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          setToken(credentials.password);
          setUserId(credentials.username);
          console.log('Credentials found');
        } else {
          console.log('No credentials stored');
        }
      } catch (err) {
        console.log('Keychain could not be accessed');
      }
    };
    checkToken();
  }, []);

  let NavComponent;
  if (token) {
    NavComponent = <AppNavigation />;
  } else {
    NavComponent = <AuthNavigation />;
  }

  return (
    <ThemeContext.Provider value={preferences}>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}>
        <PaperProvider
          theme={theme}
          settings={{ icon: props => <Ionicons {...props} /> }}>
          <NavigationContainer theme={theme}>
            {NavComponent}
          </NavigationContainer>
        </PaperProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
