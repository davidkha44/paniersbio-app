import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const CardPaymentScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Numéro de carte" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardPaymentScreen;
