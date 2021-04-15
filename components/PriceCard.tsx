import React, { useState } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Colors from '../constants/Colors';

interface Props {
  name: string;
  subtitle: string;
  price: number;
  index: number;
  selectedArray: boolean[];
  setSelectHandler: (arg0: number) => void;
}

const PriceCard = ({
  name,
  subtitle,
  price,
  index,
  selectedArray,
  setSelectHandler,
}: Props) => {
  const [, setSelect] = useState(selectedArray[index - 1]);
  const selectStyle = {
    borderWidth: selectedArray[index - 1] ? 1 : 0,
    borderColor: selectedArray[index - 1] ? Colors.primary : '',
  };

  const selectHandler = () => {
    setSelectHandler(index);
    selectedArray[index] ? setSelect(true) : setSelect(false);
  };

  return (
    <TouchableNativeFeedback
      onPress={() => selectHandler()}
      useForeground={true}>
      <View style={[styles.container, selectStyle]}>
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
    marginLeft: '10%',
    color: 'black',
  },
  cardSubtitle: {
    fontFamily: 'OpenSans-Regular',
    marginLeft: '10%',
    color: 'black',
  },
});

export default PriceCard;
