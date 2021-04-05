import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';

interface Props {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.accent, Colors.tertiary, Colors.primary]}
        style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    height: 48,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans-SemiBold',
    color: 'white',
  },
});

export default Button;
