import { API_KEY } from '@env';
import { useTheme } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, Linking, StyleSheet, Text, View } from 'react-native';
import AuthContext from '../../components/Auth/AuthContext';
import SubsContext from '../../components/Auth/SubsContext';

import PaymentCard from '../../components/PaymentCard';
import PriceCard from '../../components/PriceCard';
import Colors from '../../constants/Colors';
//import AuthContext from '../../components/Auth/AuthContext';

interface subs {
  _id: number;
  name: string;
  subtitle: string;
  price: number;
  index: number;
}

const SubscriptionScreen = () => {
  const auth = useContext(AuthContext);
  const [totalToPay, setTotalToPay] = useState<number>(0);
  const theme = useTheme();
  const { subType } = useContext(SubsContext);

  const renderVegCard = ({ item }: { item: subs }) => {
    const { name, subtitle, price, index } = item;
    return (
      <PriceCard name={name} subtitle={subtitle} price={price} index={index} />
    );
  };

  const SUBSCRIPTION: subs[] = [
    {
      _id: 1,
      name: 'Panier unitaire',
      subtitle: '1 Panier',
      price: 5,
      index: 1,
    },
    {
      _id: 2,
      name: 'Abonnement 1 mois',
      subtitle: '4 Paniers',
      price: 22,
      index: 2,
    },
    {
      _id: 3,
      name: 'Abonnnement 4 mois',
      subtitle: '16 Paniers',
      price: 80,
      index: 3,
    },
  ];

  const reqPaymentLydia = async () => {
    try {
      const res = await axios.post(
        `${API_KEY}/api/subscription`,
        {
          amount: totalToPay,
          recipient: '+33621491838',
          payment_method: 'lydia',
        },
        {
          headers: {
            authorization: 'Bearer ' + auth.token,
          },
        },
      );
      console.log(res.data.url);
      console.log(res.data.request_uuid);

      await Linking.openURL(res.data.url);
    } catch (err) {
      console.log(err);
    }
  };
  const reqPaymentCB = async () => {
    try {
      const res = await axios.post(
        `${API_KEY}/api/subscription`,
        {
          amount: totalToPay,
          recipient: '+33621491838',
          payment_method: 'cb',
        },
        {
          headers: {
            authorization: 'Bearer ' + auth.token,
          },
        },
      );
      console.log(res.data.url);
      console.log(res.data.request_uuid);

      await Linking.openURL(res.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    switch (subType) {
      case 1:
        setTotalToPay(5);
        break;
      case 2:
        setTotalToPay(22);
        break;
      case 3:
        setTotalToPay(80);
        break;
      default:
        setTotalToPay(0);
        break;
    }
  }, [subType]);

  return (
    <View>
      <Image
        source={require('../../assets/images/shipping.png')}
        style={styles.image}
      />
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Abonnements
      </Text>
      <FlatList
        data={SUBSCRIPTION}
        renderItem={renderVegCard}
        keyExtractor={item => item._id.toString()}
      />
      <View style={styles.payView}>
        <PaymentCard
          title="Payer avec Lydia"
          image="lock-closed"
          bgColor="#5C91C9"
          onPress={() => reqPaymentLydia()}
        />
        <PaymentCard
          title="Payer par CB"
          image="wallet"
          bgColor={Colors.primary}
          onPress={() => reqPaymentCB()}
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
    marginTop: 10,
  },
});

export default SubscriptionScreen;
