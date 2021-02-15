import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import Button from '../Button';
import DismissKeyboard from '../DismissKeyboard';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/farmer.png')}
        style={styles.image}
      />
      <DismissKeyboard>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setUserEmail(text)}
            value={userEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setUserPassword(text)}
            value={userPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Text style={styles.description}>
            Pas encore de compte ?{' '}
            <Text
              style={styles.textSignUp}
              onPress={() => navigation.navigate('SignUp')}>
              Inscrivez-vous !
            </Text>
          </Text>
          <Button title="Se connecter" onPress={() => console.log('Pressed')} />
        </View>
      </DismissKeyboard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: Colors.inactive,
    paddingLeft: 25,
    height: 48,
  },
  textInputView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '40%',
    marginBottom: 15,
  },
  description: {
    marginVertical: 20,
    marginBottom: 20,
  },
  textSignUp: {
    fontFamily: 'OpenSans-Bold',
    color: Colors.primary,
  },
});
export default LoginScreen;
