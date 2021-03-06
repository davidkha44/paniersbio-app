import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/Colors';

const SplashScreen = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('Initial');
  }, 1000);
  return (
    <View>
      <LinearGradient
        colors={[Colors.accent, Colors.tertiary, Colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}>
        <View style={styles.circle}>
          <Image
            source={require('../assets/images/paniersBioLOGOwhite.png')}
            style={styles.image}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
});
export default SplashScreen;
