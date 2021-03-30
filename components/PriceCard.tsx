import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

interface Props {
  name: string;
  subtitle: string;
  price: number;
}

const PriceCard = ({ name, subtitle, price }: Props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log('Pressed')}
      useForeground={true}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>
        <View style={styles.amountView}>
          <Text style={styles.cardSubtitle}>{price} €</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    height: 70,
    width: '80%',
    overflow: 'hidden',
    marginVertical: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  titleView: {
    justifyContent: 'center',
  },
  amountView: {
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginLeft: '5%',
    color: 'black',
  },
  cardSubtitle: {
    fontFamily: 'OpenSans-Regular',
    marginLeft: '5%',
    color: 'black',
  },
});

export default PriceCard;
