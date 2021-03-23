import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SubscriptionScreen from '../screens/App/SubscriptionScreen';
import CardPaymentScreen from '../screens/App/CardPaymentScreen';

const Stack = createStackNavigator();

const PayNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Subscreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="SubScreen"
        component={SubscriptionScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CardPayment"
        component={CardPaymentScreen}
      />
    </Stack.Navigator>
  );
};

export default PayNavigation;
