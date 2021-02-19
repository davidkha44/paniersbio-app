import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, ScrollView, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_KEY } from '@env';

import AuthContext from '../../components/Auth/AuthContext';
import WeeklyVeg from '../../components/Home/WeeklyVeg';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const [WEEKLYVEGGIES, setWEEKLYVEGGIES] = useState<veggies[]>([]);
  const auth = useContext(AuthContext);
  const navigation = useNavigation();

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
      <ScrollView>
        <Image
          source={require('../../assets/images/countryside.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Chercher une recette ..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
          onFocus={() => navigation.navigate('Search')}
        />
        <WeeklyVeg weeklyVeggies={WEEKLYVEGGIES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  searchbar: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#ffff',
    paddingLeft: 20,
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 60,
    elevation: 1,
  },
});

export default HomeScreen;
