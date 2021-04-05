import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the favourite screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavouriteScreen;
