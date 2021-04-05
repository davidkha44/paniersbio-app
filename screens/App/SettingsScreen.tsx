import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import AuthContext from '../../components/Auth/AuthContext';
import email from 'react-native-email';

const SettingsScreen = () => {
  const auth = useContext(AuthContext);

  const handleEmail = () => {
    const to = ['david.kha@ensea.fr'];
    try {
      email(to);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Général</Text>
      <TouchableNativeFeedback>
        <View style={styles.parameter}>
          <Text>Notifications</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={styles.parameter}>
          <Text>Thème</Text>
        </View>
      </TouchableNativeFeedback>

      <Text style={styles.title}>Contact</Text>
      <TouchableNativeFeedback onPress={() => handleEmail()}>
        <View style={styles.parameter}>
          <Text>Email Les Paniers Bio Support</Text>
        </View>
      </TouchableNativeFeedback>

      <Text style={styles.title}>Compte</Text>
      <TouchableNativeFeedback onPress={() => auth.logout()}>
        <View style={styles.parameter}>
          <Text style={styles.paramText}>Se déconnecter</Text>
        </View>
      </TouchableNativeFeedback>

      <Text style={styles.title}>A propos</Text>
      <TouchableNativeFeedback>
        <View style={styles.parameter}>
          <Text>Termes et conditions</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={styles.parameter}>
          <Text>Politique de confidentialité</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    marginVertical: 10,
  },
  parameter: {
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
    paddingLeft: '5%',
    borderRadius: 5,
    marginVertical: 2,
  },
  paramText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: 'red',
  },
});

export default SettingsScreen;
