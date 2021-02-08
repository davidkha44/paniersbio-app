import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RecipeScreen from '../screens/RecipeScreen';

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName: string;
          let iconColor: string = focused ? Colors.primary : Colors.inactive;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Subscription':
              iconName = 'basket';
              break;
            case 'Favourites':
              iconName = 'heart';
              break;
            case 'Recipes':
              iconName = 'restaurant';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = '';
              break;
          }
          return <Ionicons name={iconName} color={iconColor} size={24} />;
        },
      })}
      activeColor={Colors.primary}
      inactiveColor={Colors.inactive}
      barStyle={styles.barStyle}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recipes" component={RecipeScreen} />
      <Tab.Screen name="Favourites" component={FavouriteScreen} />
      <Tab.Screen name="Subscription" component={SubscriptionScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'white',
  },
});

export default AppNavigation;
