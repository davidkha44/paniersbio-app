import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

import HomeNavigation from '../components/HomeNavigation';
// import FavouriteScreen from '../screens/App/FavouriteScreen';
// import RecipeScreen from '../screens/App/RecipeScreen';
import SettingsScreen from '../screens/App/SettingsScreen';
import SubscriptionScreen from '../screens/App/SubscriptionScreen';
import { useTheme } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = () => {
  const theme = useTheme();
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
            // case 'Favourites':
            //   iconName = 'heart';
            //   break;
            // case 'Recipes':
            //   iconName = 'restaurant';
            //   break;
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
      barStyle={{ backgroundColor: theme.colors.card }}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      {/* <Tab.Screen name="Recipes" component={RecipeScreen} />
      <Tab.Screen name="Favourites" component={FavouriteScreen} /> */}
      <Tab.Screen name="Subscription" component={SubscriptionScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
