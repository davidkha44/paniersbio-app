import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import axios from 'axios';
import AuthContext from '../SignUp/AuthContext';

import VeggiesCard from './VeggiesCard';
import { API_KEY } from '@env';

interface veggies {
  _id: number;
  name: string;
  quantity: number;
  imageUrl: string;
}

const WeeklyVeg = () => {
  const [WEEKLYVEGGIES, setWEEKLYVEGGIES] = useState<veggies[]>([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_KEY}/api/panier/week/`, {
        headers: {
          authorization: 'Bearer ' + auth.token,
        },
      });
      let data = result.data;
      setWEEKLYVEGGIES(data.vegetables);
    };
    fetchData();
  }, [auth.token]);

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
