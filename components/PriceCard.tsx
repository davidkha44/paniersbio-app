import React, { useState } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Colors from '../constants/Colors';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

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
  const theme = useTheme();

  //Animation
  const animation = useSharedValue(0);
  const animationColor = useDerivedValue(() => {
    return interpolateColor(
      animation.value,
      [0, 1],
      [theme.colors.card, Colors.primary],
    );
  });

  const startAnimation = () => {
    animation.value = withTiming(1, {
      duration: 2000,
    });
  };
  const animationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: animationColor.value,
    };
  });

  // const selectStyle = {
  //   // borderWidth: selectedArray[index - 1] ? 2 : 0,
  //   // borderColor: selectedArray[index - 1] ? Colors.primary : '',
  //   backgroundColor: selectedArray[index - 1]
  //     ? Colors.primary
  //     : theme.colors.card,
  // };

  const selectHandler = () => {
    setSelectHandler(index);
    selectedArray[index] ? setSelect(true) : setSelect(false);
    startAnimation();
  };

  return (
    <TouchableNativeFeedback
      onPress={() => selectHandler()}
      useForeground={true}>
      <Animated.View style={[styles.container, animationStyle]}>
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
      </Animated.View>
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
