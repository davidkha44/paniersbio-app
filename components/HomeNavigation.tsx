import React from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import HomeScreen from '../screens/App/HomeScreen';
import SearchScreen from '../screens/App/Home/SearchScreen';
import VeggieScreen from '../screens/App/Home/VeggieScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.navigate('Home')}
            />
          ),
        }}
        name="Veggie"
        component={VeggieScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
