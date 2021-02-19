import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Fade, PlaceholderLine, Placeholder } from 'rn-placeholder';

const CardPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Placeholder Animation={Fade}>
        <PlaceholderLine width={80} height={24} noMargin style={styles.title} />
        <PlaceholderLine width={40} noMargin />
      </Placeholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '80%',
    paddingLeft: 15,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 6,
  },
  title: {
    marginBottom: 10,
  },
});

export default CardPlaceholder;
