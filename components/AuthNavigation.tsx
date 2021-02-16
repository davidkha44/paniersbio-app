import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './SignUp/InitialScreen';
import LoginScreen from './SignUp/LoginScreen';
import SignUpScreen from './SignUp/SignUpScreen';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Splash">
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
