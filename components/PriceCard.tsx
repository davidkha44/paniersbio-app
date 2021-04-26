import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Colors from '../constants/Colors';
import SubsContext from './Auth/SubsContext';

interface Props {
  name: string;
  subtitle: string;
  price: number;
  index: number;
}

const PriceCard = ({ name, subtitle, price, index }: Props) => {
  const theme = useTheme();
  const { setSubType, setSubsArray, subsArray } = useContext(SubsContext);

  const borderStyle = {
    borderColor: subsArray[index - 1] ? Colors.primary : '',
    borderWidth: subsArray[index - 1] ? 2 : 0,
    backgroundColor: theme.colors.card,
  };

  const selectHandler = () => {
    setSubType(index);
    setSubsArray(index - 1);
  };

  return (
    <TouchableNativeFeedback
      onPress={() => selectHandler()}
      useForeground={true}>
      <View style={[styles.container, borderStyle]}>
        <View style={styles.titleView}>
          <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
            {name}
          </Text>
          <Text style={[styles.cardSubtitle, { color: theme.colors.text }]}>
            {subtitle}
          </Text>
        </View>
        <View style={styles.amountView}>
          <Text style={[styles.cardSubtitle, { color: theme.colors.text }]}>
            {price} €
          </Text>
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
    elevation: 1,
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
