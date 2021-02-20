import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import AuthContext from '../../components/Auth/AuthContext';

const SettingsScreen = () => {
  const auth = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compte</Text>
      <TouchableNativeFeedback onPress={() => auth.logout()}>
        <View style={styles.parameter}>
          <Text style={styles.paramText}>Se déconnecter</Text>
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.title}>A propos</Text>
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
  },
  paramText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: 'red',
  },
});

export default SettingsScreen;
