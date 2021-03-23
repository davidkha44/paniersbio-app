import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string;
  image: string;
  bgColor: string;
}

const PaymentCard = ({ title, image, bgColor }: Props) => {
  const bgStyle = { backgroundColor: bgColor };
  return (
    <TouchableNativeFeedback onPress={() => console.log('Pay up')}>
      <View style={[styles.container, bgStyle]}>
        <Ionicons name={image} size={20} color="white" />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: 'darkblue',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
});

export default PaymentCard;
