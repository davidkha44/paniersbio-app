import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Chip from '../../../components/Chip';
import DismissKeyboard from '../../../components/DismissKeyboard';
import Colors from '../../../constants/Colors';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const navigation = useNavigation();

  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dessert, setDessert] = useState(false);

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <TextInput
          placeholder="Chercher une recette ..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
          autoFocus
          onFocus={() => navigation.navigate('Search')}
        />
        <View style={styles.chips}>
          <Chip
            text="Petit-déjeuner"
            selected={breakfast}
            setSelected={setBreakfast}
            selectedColor={Colors.primary}
          />
          <Chip
            text="Plat"
            selected={lunch}
            setSelected={setLunch}
            selectedColor={Colors.tertiary}
          />
          <Chip
            text="Dessert"
            selected={dessert}
            setSelected={setDessert}
            selectedColor={Colors.tertiary}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  searchbar: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
    paddingLeft: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.inactive,
  },
  chips: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default SearchScreen;
