import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { API_KEY } from '@env';

interface Props {
  name: string;
  quantity: number;
  imageUrl: string;
}

const VeggiesCard = ({ name, quantity, imageUrl }: Props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log(`${name} card pressed !`)}
      useForeground={true}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: `${API_KEY}/${imageUrl}`,
          }}
          style={styles.image}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardSubtitle}>{quantity}</Text>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '80%',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 5,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: 'white',
    marginLeft: '5%',
  },
  cardSubtitle: {
    fontFamily: 'OpenSans-Regular',
    color: 'white',
    marginLeft: '5%',
  },
});

export default VeggiesCard;
