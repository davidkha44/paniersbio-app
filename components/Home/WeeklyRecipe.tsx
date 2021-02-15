import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import axios from 'axios';
import { API_KEY } from '@env';

import RecipeCard from './RecipeCard';

interface recipe {
  _id: number;
  title: string;
  imageUrl: string;
  prep: string[];
  ingredients: string[];
  total_time: number;
  prep_time: number;
  baking_time: number;
  difficulty: number;
  rating: number;
  isFavourite: boolean;
}

const WeeklyRecipe = () => {
  const [WEEKLYRECIPES, setWEEKLYRECIPES] = useState<recipe[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_KEY}/api/recipe/week/`);
      let data = result.data;
      setWEEKLYRECIPES(data.recipes);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }: { item: recipe }) => (
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
      <Title style={styles.titleStyle}>Recettes de la semaine</Title>
      <FlatList
        style={styles.flatlistStyle}
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
    width: '100%',
  },
  titleStyle: {
    marginLeft: '10%',
  },
  flatlistStyle: {
    marginLeft: '7.5%',
  },
});

export default WeeklyRecipe;
