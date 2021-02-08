import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import axios from 'axios';

import VeggiesCard from './VeggiesCard';

interface veggies {
  _id: number;
  name: string;
  quantity: number;
  imageUrl: string;
}

const WeeklyVeg = () => {
  const [WEEKLYVEGGIES, setWEEKLYVEGGIES] = useState<veggies[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'http://ec2-15-237-49-138.eu-west-3.compute.amazonaws.com:8080/api/panier/week/',
      );
      setWEEKLYVEGGIES(result.data.vegetables);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Title style={styles.titleStyle}>Légumes de la semaine</Title>
      <View style={styles.vegListContainer}>
        {WEEKLYVEGGIES.map((veggie) => (
          <View key={veggie._id} style={styles.veggieContainer}>
            <VeggiesCard
              name={veggie.name}
              quantity={veggie.quantity}
              imageUrl={veggie.imageUrl}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vegListContainer: {
    width: '100%',
    alignItems: 'center',
  },
  veggieContainer: {
    width: '100%',
    margin: 5,
    alignItems: 'center',
  },
  titleStyle: {
    marginLeft: '10%',
  },
});

export default WeeklyVeg;
