import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Card } from 'react-native-paper';

const VeggiesCard = (props: {
  name: string;
  quantity: number;
  imageUrl: string;
}) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log(`${props.name} card pressed !`)}
      useForeground={true}>
      <View style={styles.container}>
        <Card>
          <Card.Title
            title={props.name}
            subtitle={props.quantity}
            titleStyle={styles.cardTitle}
            subtitleStyle={styles.cardSubtitle}
          />
          <Card.Cover
            source={{
              uri: `http://ec2-15-237-49-138.eu-west-3.compute.amazonaws.com:8080/${props.imageUrl}`,
            }}
            style={styles.image}
          />
        </Card>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '80%',
    borderRadius: 6,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  cardTitle: {
    fontFamily: 'OpenSans_700Bold',
    color: 'white',
  },
  cardSubtitle: {
    fontFamily: 'OpenSans_400Regular',
    color: 'white',
  },
});

export default VeggiesCard;
