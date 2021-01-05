import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const VeggiesCard = ({ name, quantity, imageUrl }) => {
  return (
    <Card style={styles.container}>
      <Card.Title
        title={name}
        subtitle={quantity}
        titleStyle={styles.cardTitle}
        subtitleStyle={styles.cardSubtitle}
      />
      <Card.Cover source={{ uri: `${imageUrl}` }} style={styles.image} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "80%",
    borderRadius: 6,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
  cardTitle: {
    fontFamily: "OpenSans_700Bold",
    color: "white",
  },
  cardSubtitle: {
    fontFamily: "OpenSans_400Regular",
    color: "white",
  },
});

export default VeggiesCard;
