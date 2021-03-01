import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import PriceCard from '../../components/PriceCard';

interface subs {
  _id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const SubscriptionScreen = () => {
  const renderVegCard = ({ item }: { item: subs }) => {
    const { name, price, imageUrl } = item;
    return <PriceCard name={name} quantity={price} imageUrl={imageUrl} />;
  };
  const SUBSCRIPTION: subs[] = [
    {
      _id: 1,
      name: 'Panier unitaire',
      price: 5,
      imageUrl:
        'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      _id: 2,
      name: 'Abonnement 1 mois',
      price: 22,
      imageUrl:
        'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
      _id: 3,
      name: 'Abonnnement 4 mois',
      price: 80,
      imageUrl:
        'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];
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
});

export default SubscriptionScreen;
