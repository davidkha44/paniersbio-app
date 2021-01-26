import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/Colors";

const VeggiesCard = ({ title, total_time, imageUrl, rating, isFavourite }) => {
  const [isFav, setIsFav] = useState(isFavourite);

  return (
    <TouchableNativeFeedback
      onPress={() => console.log(`${title} card pressed !`)}
      useForeground={true}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: `${imageUrl}` }} style={styles.image} />
          <Card.Content style={{ paddingVertical: 3 }}>
            <Title>{title}</Title>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Paragraph>{total_time} min</Paragraph>
                <Paragraph>{rating}</Paragraph>
              </View>
              <View>
                <Ionicons
                  name={isFav ? "heart" : "heart-outline"}
                  size={28}
                  color={Colors.primary}
                  onPress={() => setIsFav(!isFav)}
                />
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginHorizontal: 10,
    borderRadius: 6,
    overflow: "hidden",
  },
  image: {
    height: 150,
  },
});

export default VeggiesCard;
