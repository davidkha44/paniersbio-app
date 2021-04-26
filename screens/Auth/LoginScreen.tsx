import React, { useState, useRef, useContext } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_KEY } from '@env';

import AuthContext from '../../components/Auth/AuthContext';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import DismissKeyboard from '../../components/DismissKeyboard';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  //Style of the text input
  const [emailStyle, setEmailStyle] = useState({
    borderColor: Colors.inactive,
    color: 'black',
  });
  const [passwordStyle, setPasswordStyle] = useState({
    borderColor: Colors.inactive,
    color: 'black',
  });

  //If text input not valid, display error message
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const ref_input2 = useRef(null);
  const auth = useContext(AuthContext);

  const onSubmit = () => {
    const textInput = ref_input2.current as any;
    textInput.focus();
  };

  const login = async () => {
    let error = 0;
    if (userPassword.length < 5) {
      setPasswordStyle({ borderColor: 'red', color: 'red' });
      setPasswordError('Mot de passe de 5 caractères minimum');
      error = -1;
    } else {
      setPasswordStyle({ borderColor: Colors.inactive, color: 'black' });
      setPasswordError('');
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setEmailStyle({ borderColor: 'red', color: 'red' });
      setEmailError('Email non valide');
      error = -1;
    } else {
      setEmailStyle({ borderColor: Colors.inactive, color: 'black' });
      setEmailError('');
    }
    if (error !== 0) {
      return -1;
    }
    try {
      console.log(`${API_KEY}/api/user/login/`);

      let res = await axios.post(`${API_KEY}/api/user/login/`, {
        email: userEmail,
        password: userPassword,
      });
      let data = res.data;
      auth.login(data._id, data.token);
    } catch (err) {
      setPasswordError(err.response.data.message);
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>Content de vous revoir !</Text>
        <Image
          source={require('../../assets/images/farmer.png')}
          style={styles.image}
        />
        <View>
          <TextInput
            style={[styles.textInputStyle, emailStyle]}
            onChangeText={text => setUserEmail(text)}
            value={userEmail}
            placeholder="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => onSubmit()}
            blurOnSubmit={false}
          />
          {emailError.length !== 0 ? (
            <Text style={[emailStyle, styles.defaultError]}>{emailError}</Text>
          ) : null}
          <TextInput
            style={[styles.textInputStyle, passwordStyle]}
            onChangeText={text => setUserPassword(text)}
            value={userPassword}
            placeholder="Mot de passe"
            secureTextEntry={true}
            ref={ref_input2}
            onSubmitEditing={() => login()}
          />
          {passwordError.length !== 0 ? (
            <Text style={[passwordStyle, styles.defaultError]}>
              {passwordError}
            </Text>
          ) : null}
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
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    color: Colors.primary,
    marginTop: 50,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingLeft: 25,
    height: 48,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  description: {
    marginVertical: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  textSignUp: {
    fontFamily: 'OpenSans-Bold',
    color: Colors.primary,
  },
  defaultError: {
    marginTop: 15,
    fontFamily: 'OpenSans-Bold',
    color: 'red',
  },
});
export default LoginScreen;
