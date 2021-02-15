import React, { useState, useRef, useContext } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from './AuthContext';

import Colors from '../../constants/Colors';
import Button from '../Button';
import DismissKeyboard from '../DismissKeyboard';
import axios from 'axios';
import { API_KEY } from '@env';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const ref_input2 = useRef(null);
  const auth = useContext(AuthContext);

  const onSubmit = () => {
    const textInput = ref_input2.current as any;
    textInput.focus();
  };

  const login = async () => {
    let res = await axios.post(`${API_KEY}/api/user/login/`, {
      email: userEmail,
      password: userPassword,
    });

    let data = res.data;
    auth.login(data._id, data.token);
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/farmer.png')}
          style={styles.image}
        />
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setUserEmail(text)}
            value={userEmail}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => onSubmit()}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setUserPassword(text)}
            value={userPassword}
            placeholder="Mot de passe"
            secureTextEntry={true}
            ref={ref_input2}
            onSubmitEditing={() => login()}
          />
          <Text style={styles.description}>
            Pas encore de compte ?{' '}
            <Text
              style={styles.textSignUp}
              onPress={() => navigation.navigate('SignUp')}>
              Inscrivez-vous !
            </Text>
          </Text>
          <Button title="Se connecter" onPress={() => login()} />
        </View>
      </View>
    </DismissKeyboard>
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
