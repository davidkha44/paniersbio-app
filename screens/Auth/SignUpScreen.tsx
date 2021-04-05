import React, { useState, useRef, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../components/Auth/AuthContext';

import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import DismissKeyboard from '../../components/DismissKeyboard';
import { API_KEY } from '@env';
import axios from 'axios';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const ref_input2 = useRef(null);
  const ref_input3 = useRef(null);
  const auth = useContext(AuthContext);

  const [emailStyle, setEmailStyle] = useState({
    borderColor: Colors.inactive,
    color: 'black',
  });
  const [passwordStyle, setPasswordStyle] = useState({
    borderColor: Colors.inactive,
    color: 'black',
  });
  const [checkPasswordStyle, setCheckPasswordStyle] = useState({
    borderColor: Colors.inactive,
    color: 'black',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkPasswordError, setCheckPasswordError] = useState('');

  const onSubmit = (ref: React.MutableRefObject<null>) => {
    const textInput = ref.current as any;
    textInput.focus();
  };

  const signUp = async () => {
    let error = 0;
    if (userPassword.length === 0) {
      setPasswordStyle({ borderColor: 'red', color: 'red' });
      setPasswordError('Veuillez rentrer un mot de passe');
      error = -1;
    } else if (userPassword.length < 5) {
      setPasswordStyle({ borderColor: 'red', color: 'red' });
      setPasswordError('Le mot de passe doit avoir au moins 5 charactères');
      error = -1;
    } else {
      setPasswordStyle({ borderColor: Colors.inactive, color: 'black' });
      setPasswordError('');
    }
    if (/\S+@\S+\.\S+/.test(userEmail)) {
      setEmailStyle({ borderColor: Colors.inactive, color: 'black' });
      setEmailError('');
    } else {
      setEmailStyle({ borderColor: 'red', color: 'red' });
      setEmailError("Ce n'est pas un email valide");
      error = -1;
    }
    if (checkPassword.localeCompare(userPassword) === 0) {
      setCheckPasswordStyle({ borderColor: Colors.inactive, color: 'black' });
      setCheckPasswordError('');
    } else {
      setCheckPasswordStyle({ borderColor: Colors.inactive, color: 'red' });
      setCheckPasswordError('Les mots de passe ne correspondent pas');
      error = -1;
    }
    if (error !== 0) {
      return -1;
    }
    try {
      console.log(API_KEY);

      await axios.post(`${API_KEY}/api/user/signup/`, {
        email: userEmail,
        password: userPassword,
      });

      let res = await axios.post(`${API_KEY}/api/user/login/`, {
        email: userEmail,
        password: userPassword,
      });

      let data = res.data;
      auth.login(data._id, data.token);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.child}>
          <Text style={styles.title}>Inscription</Text>
          <Text style={styles.subtitle}>Créez votre compte</Text>
          <View>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => setUserEmail(text)}
              value={userEmail}
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => onSubmit(ref_input2)}
              blurOnSubmit={false}
            />
            {emailError.length !== 0 ? (
              <Text style={emailStyle}>{emailError}</Text>
            ) : null}
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => setUserPassword(text)}
              value={userPassword}
              placeholder="Mot de passe"
              secureTextEntry={true}
              ref={ref_input2}
              returnKeyType="next"
              onSubmitEditing={() => onSubmit(ref_input3)}
              blurOnSubmit={false}
            />
            {passwordError.length !== 0 ? (
              <Text style={passwordStyle}>{passwordError}</Text>
            ) : null}
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => setCheckPassword(text)}
              value={checkPassword}
              placeholder="Mot de passe"
              secureTextEntry={true}
              ref={ref_input3}
              onSubmitEditing={() => signUp()}
            />
            {checkPasswordError.length !== 0 ? (
              <Text style={checkPasswordStyle}>{checkPasswordError}</Text>
            ) : null}
            <Text style={styles.description}>
              Déjà un compte ?{' '}
              <Text
                style={styles.textSignUp}
                onPress={() => navigation.navigate('Login')}>
                Connectez-vous !
              </Text>
            </Text>
            <Button title="S'incrire" onPress={() => signUp()} />
          </View>
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
  child: {
    width: '80%',
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    color: Colors.primary,
    marginTop: 50,
    marginBottom: 10,
    paddingLeft: 25,
  },
  subtitle: {
    marginBottom: '15%',
    fontSize: 16,
    paddingLeft: 25,
  },
  description: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: Colors.inactive,
    paddingLeft: 25,
    marginBottom: 10,
    height: 48,
  },
  image: {
    width: '100%',
    height: '40%',
  },
  textSignUp: {
    fontFamily: 'OpenSans-SemiBold',
    color: Colors.primary,
  },
});
export default SignUpScreen;
