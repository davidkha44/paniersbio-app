import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  name: string;
  quantity: number;
  imageUrl: string;
}

const Card = ({ name, quantity, imageUrl }: Props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log(`${name} card pressed !`)}
      useForeground={true}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: imageUrl,
          }}
          style={styles.image}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.27)', 'rgba(0, 0, 0, 0.53)']}
            style={styles.image}>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardSubtitle}>{quantity}</Text>
          </LinearGradient>
        </ImageBackground>
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

export default Card;
