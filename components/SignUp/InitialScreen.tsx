import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';

const InitialScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/gardening.png')}
        style={styles.image}
      />
      <Button
        title="Se connecter"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="S'inscrire"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: '50%',
    marginVertical: 15,
  },
});
export default InitialScreen;
