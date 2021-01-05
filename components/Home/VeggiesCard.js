import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Card } from "react-native-paper";

const VeggiesCard = ({ name, quantity, imageUrl }) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log(`${name} card pressed !`)}
      useForeground={true}
    >
      <View style={styles.container}>
        <Card>
          <Card.Title
            title={name}
            subtitle={quantity}
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
          />
          <Card.Cover source={{ uri: `${imageUrl}` }} style={styles.image} />
        </Card>
      </View>
    </TouchableNativeFeedback>
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
