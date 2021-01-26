import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Title } from "react-native-paper";

import WEEKLYRECIPES from "../../data/weeklyRecipes";
import RecipeCard from "./RecipeCard";

const WeeklyRecipe = () => {
  const renderItem = ({ item }) => (
    <RecipeCard
      title={item.title}
      total_time={item.total_time}
      imageUrl={item.imageUrl}
      rating={item.rating}
      isFavourite={item.isFavourite}
    />
  );

  return (
    <View style={styles.recipeListContainer}>
      <Title style={{ marginLeft: "10%" }}>Recettes de la semaine</Title>
      <FlatList
        style={{ marginLeft: "7.5%" }}
        data={WEEKLYRECIPES}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recipeListContainer: {
    width: "100%",
  },
});

export default WeeklyRecipe;
