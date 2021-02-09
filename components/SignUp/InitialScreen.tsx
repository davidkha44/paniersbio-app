import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';

const InitialScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Se connecter"
        isFilled={true}
        height={48}
        width={200}
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="S'inscrire"
        isFilled={false}
        height={48}
        width={200}
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
});
export default InitialScreen;
