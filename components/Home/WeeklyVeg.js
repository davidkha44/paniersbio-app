import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

import VeggiesCard from "./VeggiesCard";

const WeeklyVeg = () => {
  const [isLoading, setLoading] = useState(true);
  const [WEEKLYVEGGIES, setWEEKLYVEGGIES] = useState([]);
  useEffect(() => {
    fetch(
      "http://ec2-15-237-49-138.eu-west-3.compute.amazonaws.com:8080/api/panier/week/"
    )
      .then((response) => response.json())
      .then((data) => setWEEKLYVEGGIES(data.vegetables))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
