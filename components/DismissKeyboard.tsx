import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const DismissKeyboard = ({ children }: Props) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;
