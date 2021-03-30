import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
  text: string;
  selected: boolean;
  setSelected: (arg0: boolean) => void;
  selectedColor: string;
}

const Chip = ({ text, selected, setSelected, selectedColor }: Props) => {
  let selectedChipStyle = selected ? { backgroundColor: selectedColor } : {};
  let selectedText = selected ? { color: 'white' } : { color: 'black' };

  return (
    <View style={styles.roundedView}>
      <TouchableNativeFeedback
        onPress={() => setSelected(!selected)}
        background={TouchableNativeFeedback.Ripple('grey', true)}>
        <View style={[styles.chip, selectedChipStyle]}>
          <Text style={selectedText}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    height: 32,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#c5c5c5',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  roundedView: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
});

export default Chip;
