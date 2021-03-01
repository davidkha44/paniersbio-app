import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/App/HomeScreen';
import SearchScreen from '../screens/App/Home/SearchScreen';
import VeggieScreen from '../screens/App/Home/VeggieScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Veggie" component={VeggieScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
