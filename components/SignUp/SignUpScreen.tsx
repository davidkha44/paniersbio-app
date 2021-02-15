import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import Button from '../Button';
import DismissKeyboard from '../DismissKeyboard';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const ref_input2 = useRef(null);
  const ref_input3 = useRef(null);

  const onSubmit = (ref: React.MutableRefObject<null>) => {
    const textInput = ref.current as any;
    textInput.focus();
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/countryside.png')}
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
            onSubmitEditing={() => onSubmit(ref_input2)}
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setUserPassword(text)}
            value={userPassword}
            placeholder="Mot de passe"
            secureTextEntry={true}
            ref={ref_input2}
            returnKeyType="next"
            onSubmitEditing={() => onSubmit(ref_input3)}
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setCheckPassword(text)}
            value={checkPassword}
            placeholder="Vérification"
            secureTextEntry={true}
            ref={ref_input3}
          />
          <Text style={styles.description}>
            Déjà un compte ?{' '}
            <Text
              style={styles.textSignUp}
              onPress={() => navigation.navigate('Login')}>
              Connectez-vous !
            </Text>
          </Text>
          <Button title="S'incrire" onPress={() => console.log('Pressed')} />
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
export default SignUpScreen;
