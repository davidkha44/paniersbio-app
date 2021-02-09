import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

interface Props {
  title: string;
  isFilled: boolean;
  height: number;
  width: number;
}

const Button = ({ title, isFilled, height, width }: Props) => {
  const buttonStyle = {
    height: height,
    width: width,
    backgroundColor: isFilled ? Colors.primary : '',
    borderColor: isFilled ? '' : Colors.primary,
  };
  return (
    <TouchableOpacity>
      <View style={[styles.button, buttonStyle]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
  },
  text: {
    fontSize: 20,
  },
});

export default Button;
