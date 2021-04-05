import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';

const InitialScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/gardening.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Bienvenu</Text>
      <Text style={styles.description}>
        Inscrivez-vous ou connectez-vous pour utiliser l'application
      </Text>
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
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    color: Colors.primary,
    marginBottom: 20,
  },
  description: { width: '60%', marginBottom: 20, textAlign: 'center' },
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
