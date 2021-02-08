import React from 'react';
import { StyleSheet, View } from 'react-native';

import WeeklyVeg from '../components/Home/WeeklyVeg';
import WeeklyRecipe from '../components/Home/WeeklyRecipe';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WeeklyVeg />
      <WeeklyRecipe />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '40%',
  },
});

export default HomeScreen;
