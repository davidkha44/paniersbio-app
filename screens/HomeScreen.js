import React from "react";
import { StyleSheet, View } from "react-native";

import WeeklyVeg from "../components/Home/WeeklyVeg";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <WeeklyVeg />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "40%",
  },
});

export default HomeScreen;
