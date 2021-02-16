import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import WeeklyVeg from '../components/Home/WeeklyVeg';
import WeeklyRecipe from '../components/Home/WeeklyRecipe';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <WeeklyVeg />
        <WeeklyRecipe />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
