import React, { useContext, useEffect, useState } from 'react';
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
  const [pressed, setPressed] = useState(false);

  //Animation
  const animation = useSharedValue(0);
  const animationColor = useDerivedValue(() => {
    return interpolateColor(
      animation.value,
      [0, 1],
      [theme.colors.card, Colors.primary],
    );
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: animationColor.value,
    };
  });

  const startAnimation = () => {
    animation.value = withTiming(1, {
      duration: 100,
    });
  };
  useEffect(() => {
    const stopAnimation = () => {
      animation.value = withTiming(0, {
        duration: 1,
      });
    };
    if (!subsArray[index - 1]) {
      stopAnimation();
    }
  }, [animation, index, pressed, subsArray]);

  const selectHandler = () => {
    setSubType(index);
    setSubsArray(index - 1);
    startAnimation();
    setPressed(!pressed);
    console.log(pressed);
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
