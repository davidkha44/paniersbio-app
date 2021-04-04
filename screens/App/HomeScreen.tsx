import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import axios from 'axios';
import { API_KEY } from '@env';

import AuthContext from '../../components/Auth/AuthContext';
import CardPlaceholder from '../../components/CardPlaceholder';
import VeggieCard from '../../components/VeggieCard';
import DismissKeyboard from '../../components/DismissKeyboard';

const HomeScreen = () => {
  const [WEEKLYVEGGIES, setWEEKLYVEGGIES] = useState<veggies[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  const auth = useContext(AuthContext);
  const [error, setError] = useState<Boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${API_KEY}/api/panier/week/`, {
          headers: {
            authorization: 'Bearer ' + auth.token,
          },
        });
        let data = result.data;
        setWEEKLYVEGGIES(data.vegetables);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchData();
    setIsFetched(true);
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
    const url = `${API_KEY}/${imageUrl}`;
    return <VeggieCard name={name} quantity={quantity} imageUrl={url} />;
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

  const renderError = () => {
    return (
      <View>
        <Image
          source={require('../../assets/images/error.png')}
          style={styles.errorImage}
        />
      </View>
    );
  };

  return (
    <DismissKeyboard>
      <View>
        <Image
          source={require('../../assets/images/countryside.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Légumes de la semaine</Text>
        {isFetched ? renderList() : renderPlaceholders()}
        {error ? renderError() : renderPlaceholders()}
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
  errorImage: {
    width: '100%',
    height: 350,
    marginVertical: 10,
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
