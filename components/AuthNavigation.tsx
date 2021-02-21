import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from '../screens/Auth/InitialScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';

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
