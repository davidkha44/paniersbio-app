import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

import VeggiesCard from "./VeggiesCard";
import WEEKLYVEGGIES from "../../data/weeklyVeggies-data";

const WeeklyVeg = () => {
  return (
    <View>
      <Title style={{ marginLeft: "10%" }}>Légumes de la semaine</Title>
      <View style={styles.vegListContainer}>
        {WEEKLYVEGGIES.map((veggie) => (
          <View key={veggie._id} style={styles.veggieContainer}>
            <VeggiesCard
              name={veggie.name}
              quantity={veggie.quantity}
              imageUrl={veggie.imageUrl}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vegListContainer: {
    width: "100%",
    alignItems: "center",
  },
  veggieContainer: {
    width: "100%",
    margin: 5,
    alignItems: "center",
  },
});

export default WeeklyVeg;