import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  FlatList,
  Text,
} from 'react-native';
import axios from 'axios';
import { API_KEY } from '@env';

import AuthContext from '../../components/Auth/AuthContext';
import CardPlaceholder from '../../components/CardPlaceholder';
import VeggiesCard from '../../components/Home/VeggiesCard';
import DismissKeyboard from '../../components/DismissKeyboard';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const [WEEKLYVEGGIES, setWEEKLYVEGGIES] = useState<veggies[]>([]);
  const [isFetched, setIsFetched] = useState(false);
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
    setTimeout(() => setIsFetched(true), 1000);
  }, [auth.token]);

  const renderPlaceholders = () => {
    return (
      <View>
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
      </View>
    );
  };

  const renderVegCard = ({ item }: { item: veggies }) => {
    const { name, quantity, imageUrl } = item;
    return <VeggiesCard name={name} quantity={quantity} imageUrl={imageUrl} />;
  };

  const renderList = () => {
    return (
      <FlatList
        data={WEEKLYVEGGIES}
        renderItem={renderVegCard}
        keyExtractor={(item) => item._id.toString()}
      />
    );
  };

  return (
    <DismissKeyboard>
      <View>
        <Image
          source={require('../../assets/images/countryside.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Chercher une recette ..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
          onFocus={() => console.log('Search')}
        />
        <Text style={styles.title}>Légumes de la semaine</Text>
        {isFetched ? renderList() : renderPlaceholders()}
      </View>
    </DismissKeyboard>
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
  title: {
    paddingLeft: '10%',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HomeScreen;