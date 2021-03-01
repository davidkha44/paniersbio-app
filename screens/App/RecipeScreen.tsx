import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RecipeScreen = () => {
  return (
    <View>
      <Image
        source={require('../../assets/images/pizza-share.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Favoris</Text>
      <Text style={styles.title}>Recette de la semaine</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    paddingLeft: '10%',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default RecipeScreen;
