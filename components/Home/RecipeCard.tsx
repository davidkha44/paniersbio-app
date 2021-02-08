import React, { useState } from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';

const VeggiesCard = (props: {
  title: string;
  total_time: number;
  imageUrl: string;
  rating: number;
  isFavourite: boolean;
}) => {
  const [isFav, setIsFav] = useState(props.isFavourite);

  return (
    <TouchableNativeFeedback
      onPress={() => console.log(`${props.title} card pressed !`)}
      useForeground={true}>
      <View style={styles.container}>
        <Card>
          <Card.Cover
            source={{ uri: `${props.imageUrl}` }}
            style={styles.image}
          />
          <Card.Content style={styles.cardContentStyle}>
            <Title>{props.title}</Title>
            <View style={styles.contentStyle}>
              <View>
                <Paragraph>{props.total_time} min</Paragraph>
                <Paragraph>{props.rating}</Paragraph>
              </View>
              <View>
                <Ionicons
                  name={isFav ? 'heart' : 'heart-outline'}
                  size={28}
                  color={Colors.primary}
                  onPress={() => setIsFav(!isFav)}
                />
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginHorizontal: 10,
    borderRadius: 6,
    overflow: 'hidden',
  },
  image: {
    height: 150,
  },
  cardContentStyle: {
    paddingVertical: 3,
  },
  contentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default VeggiesCard;
