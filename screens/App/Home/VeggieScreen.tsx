import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Veggie: { name: string; imageUrl: string };
};

const VeggieScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Veggie'>>();
  const { name, imageUrl } = route.params;

  return (
    <View>
      <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.27)', 'rgba(0, 0, 0, 0.53)']}
          style={styles.image}>
          <Text style={styles.title}>{name}</Text>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.description}>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ultricies est malesuada tincidunt tristique. Suspendisse semper
          vulputate fringilla. Integer tempor, tortor at placerat tristique,
          magna mauris eleifend nulla, in laoreet eros nunc eu dolor. Aliquam
          erat volutpat. Donec non dictum lorem. Praesent tincidunt finibus
          posuere. Aliquam ultricies placerat aliquet. Quisque varius neque a
          laoreet tincidunt. Integer bibendum mauris vitae urna iaculis, id
          fermentum arcu lobortis.
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.subtitle}>Recettes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: 'white',
  },
  description: {
    marginTop: 20,
    marginLeft: '5%',
  },
  subtitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  content: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default VeggieScreen;
