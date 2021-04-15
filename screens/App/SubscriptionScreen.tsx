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
  index: number;
  selectedArray: boolean[];
  setSelectHandler: (arg0: number) => void;
}

const SubscriptionScreen = () => {
  //const auth = useContext(AuthContext);
  const [totalToPay, setTotalToPay] = useState<number>(0);
  const [selectArray, setSelectArray] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const renderVegCard = ({ item }: { item: subs }) => {
    const {
      name,
      subtitle,
      price,
      index,
      selectedArray,
      setSelectHandler,
    } = item;
    return (
      <PriceCard
        name={name}
        subtitle={subtitle}
        price={price}
        index={index}
        selectedArray={selectedArray}
        setSelectHandler={setSelectHandler}
      />
    );
  };
  const selectHandler = (index: number) => {
    const newArray = new Array(3).fill(false);
    newArray[index - 1] = true;
    setSelectArray(newArray);
    newArray[0]
      ? setTotalToPay(5)
      : newArray[1]
      ? setTotalToPay(22)
      : setTotalToPay(80);
  };

  const SUBSCRIPTION: subs[] = [
    {
      _id: 1,
      name: 'Panier unitaire',
      subtitle: '1 Panier',
      price: 5,
      index: 1,
      selectedArray: selectArray,
      setSelectHandler: selectHandler,
    },
    {
      _id: 2,
      name: 'Abonnement 1 mois',
      subtitle: '4 Paniers',
      price: 22,
      index: 2,
      selectedArray: selectArray,
      setSelectHandler: selectHandler,
    },
    {
      _id: 3,
      name: 'Abonnnement 4 mois',
      subtitle: '16 Paniers',
      price: 80,
      index: 3,
      selectedArray: selectArray,
      setSelectHandler: selectHandler,
    },
  ];

  const reqPayment = () => {
    console.log(totalToPay);
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
    marginTop: 15,
  },
});

export default SubscriptionScreen;
