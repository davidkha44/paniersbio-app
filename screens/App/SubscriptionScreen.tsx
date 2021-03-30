import React from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import PaymentCard from '../../components/PaymentCard';
import PriceCard from '../../components/PriceCard';
import Colors from '../../constants/Colors';
import axios from 'axios';

interface subs {
  _id: number;
  name: string;
  subtitle: string;
  price: number;
}

const SubscriptionScreen = () => {
  const navigation = useNavigation();
  const renderVegCard = ({ item }: { item: subs }) => {
    const { name, subtitle, price } = item;
    return <PriceCard name={name} subtitle={subtitle} price={price} />;
  };
  const SUBSCRIPTION: subs[] = [
    {
      _id: 1,
      name: 'Panier unitaire',
      subtitle: '1 Panier',
      price: 5,
    },
    {
      _id: 2,
      name: 'Abonnement 1 mois',
      subtitle: '4 Paniers',
      price: 22,
    },
    {
      _id: 3,
      name: 'Abonnnement 4 mois',
      subtitle: '16 Paniers',
      price: 80,
    },
  ];

  const reqPayment = async () => {
    try {
      const formData = new FormData();
      formData.append('amount', '10');
      formData.append('currency', 'EUR');
      formData.append('type', 'phone');
      formData.append('recipient', '+33621491838');
      formData.append('vendor_token', '60478d4836310253849436');
      formData.append('payment_method', 'cb');

      const res = await axios.post(
        'https://homologation.lydia-app.com/api/request/do',
        formData,
      );

      await Linking.openURL(res.data.mobile_url);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Image
        source={require('../../assets/images/shipping.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Abonnements</Text>
      <FlatList
        data={SUBSCRIPTION}
        renderItem={renderVegCard}
        keyExtractor={(item) => item._id.toString()}
      />
      <View style={styles.payView}>
        <PaymentCard
          title="Payer avec Lydia"
          image="lock-closed"
          bgColor="#5C91C9"
          onPress={() => reqPayment()}
        />
        <PaymentCard
          title="Payer par carte"
          image="card-outline"
          bgColor={Colors.primary}
          onPress={() => navigation.navigate('CardPayment')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    paddingLeft: '10%',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginVertical: 10,
  },
  payView: {
    justifyContent: 'center',
    marginTop: 5,
  },
});

export default SubscriptionScreen;
