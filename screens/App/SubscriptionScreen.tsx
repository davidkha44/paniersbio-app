import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import PaymentCard from '../../components/PaymentCard';
import PriceCard from '../../components/PriceCard';
//import AuthContext from '../../components/Auth/AuthContext';

interface subs {
  _id: number;
  name: string;
  subtitle: string;
  price: number;
  onSelect: (arg0: boolean) => void;
  parentSelect: boolean;
}

const SubscriptionScreen = () => {
  //const auth = useContext(AuthContext);
  //const [totalToPay, setTotalToPay] = useState<Number>(0);
  const totalToPay = 0;
  const [select, setSelect] = useState(false);

  const renderVegCard = ({ item }: { item: subs }) => {
    const { name, subtitle, price, onSelect, parentSelect } = item;
    return (
      <PriceCard
        name={name}
        subtitle={subtitle}
        price={price}
        onSelect={onSelect}
        parentSelect={parentSelect}
      />
    );
  };

  const SUBSCRIPTION: subs[] = [
    {
      _id: 1,
      name: 'Panier unitaire',
      subtitle: '1 Panier',
      price: 5,
      onSelect: sel => setSelect(sel),
      parentSelect: select,
    },
    {
      _id: 2,
      name: 'Abonnement 1 mois',
      subtitle: '4 Paniers',
      price: 22,
      onSelect: sel => setSelect(sel),
      parentSelect: select,
    },
    {
      _id: 3,
      name: 'Abonnnement 4 mois',
      subtitle: '16 Paniers',
      price: 80,
      onSelect: sel => setSelect(sel),
      parentSelect: select,
    },
  ];

  const reqPayment = async () => {
    console.log(totalToPay);
    console.log('Pay up !');
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
        keyExtractor={item => item._id.toString()}
      />
      <View style={styles.payView}>
        <PaymentCard
          title="Payer"
          image="lock-closed"
          bgColor="#5C91C9"
          onPress={() => reqPayment()}
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
