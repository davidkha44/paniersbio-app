import React from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import DismissKeyboard from '../../components/DismissKeyboard';
import { useNavigation } from '@react-navigation/core';

import Colors from '../../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PaymentCard from '../../components/PaymentCard';

const CardPaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/credit-card.png')}
        />
        <Text style={styles.title}>Paiement par carte</Text>
        <View style={styles.creditForm}>
          <View style={styles.cardNumber}>
            <TextInput
              placeholder="1234 5678 1234 5678"
              keyboardType="number-pad"
              secureTextEntry={true}
            />
            <View style={styles.creditLogos}>
              <FontAwesome
                name="cc-visa"
                size={16}
                color={Colors.inactive}
                style={styles.logo}
              />
              <FontAwesome
                name="cc-mastercard"
                size={16}
                color={Colors.inactive}
                style={styles.logo}
              />
            </View>
          </View>
          <View style={styles.dateAndCVC}>
            <View style={styles.date}>
              <TextInput placeholder="MM/AA" />
            </View>
            <View style={styles.cvc}>
              <TextInput placeholder="CVC" />
            </View>
          </View>
          <PaymentCard
            title="Payer"
            image="card-outline"
            bgColor={Colors.primary}
            onPress={() => console.log('Pay up')}
          />
          <PaymentCard
            title="Annuler"
            image="arrow-back"
            bgColor={Colors.inactive}
            onPress={() => navigation.navigate('SubScreen')}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    paddingLeft: '15%',
    marginVertical: 15,
  },
  creditForm: {
    width: '70%',
    alignContent: 'space-around',
  },
  dateAndCVC: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.inactive,
    borderRadius: 10,
    marginVertical: 10,
  },
  date: {
    width: '50%',
    paddingLeft: 10,
    borderRightWidth: 1,
    borderRightColor: Colors.inactive,
  },
  cvc: {
    width: '50%',
    paddingLeft: 10,
  },
  cardNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.inactive,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  creditLogos: {
    flexDirection: 'row',
  },
  logo: {
    marginHorizontal: 2,
  },
});

export default CardPaymentScreen;
