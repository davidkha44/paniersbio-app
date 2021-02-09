import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './SignUp/InitialScreen';
import LoginScreen from './SignUp/LoginScreen';
import SignUpScreen from './SignUp/SignUpScreen';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default Auth;
