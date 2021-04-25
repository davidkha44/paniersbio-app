import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { useTheme, Switch } from 'react-native-paper';
import AuthContext from '../../components/Auth/AuthContext';
import email from 'react-native-email';
import ThemeContext from '../../components/Auth/ThemeContext';
import Colors from '../../constants/Colors';

const SettingsScreen = () => {
  const theme = useTheme();
  const auth = useContext(AuthContext);
  const { toggleTheme, isThemeDark } = useContext(ThemeContext);

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
      <Text style={[styles.title, { color: theme.colors.text }]}>Général</Text>
      <TouchableNativeFeedback>
        <View
          style={[styles.parameter, { backgroundColor: theme.colors.surface }]}>
          <Text style={{ color: theme.colors.text }}>Notifications</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={[styles.switch, { backgroundColor: theme.colors.surface }]}>
        <Text style={{ color: theme.colors.text }}>Thème</Text>
        <TouchableNativeFeedback onPress={() => toggleTheme()}>
          <Switch color={Colors.primary} value={isThemeDark} />
        </TouchableNativeFeedback>
      </View>

      <Text style={[styles.title, { color: theme.colors.text }]}>Contact</Text>
      <TouchableNativeFeedback onPress={() => handleEmail()}>
        <View
          style={[styles.parameter, { backgroundColor: theme.colors.surface }]}>
          <Text style={{ color: theme.colors.text }}>
            Email Les Paniers Bio Support
          </Text>
        </View>
      </TouchableNativeFeedback>

      <Text style={[styles.title, { color: theme.colors.text }]}>Compte</Text>
      <TouchableNativeFeedback onPress={() => auth.logout()}>
        <View
          style={[styles.parameter, { backgroundColor: theme.colors.surface }]}>
          <Text style={styles.paramText}>Se déconnecter</Text>
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
  switch: {
    height: 50,
    paddingHorizontal: '5%',
    borderRadius: 5,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SettingsScreen;
