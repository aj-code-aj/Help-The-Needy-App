import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.cardOne]}>
        <Text>Red</Text>
      </View>
      <View style={[styles.card, styles.cardTwo]}>
        <Text>Green</Text>
      </View>
      <View style={[styles.card, styles.cardThree]}>
        <Text>Blue</Text>
      </View>
      <View style={[styles.card, styles.cardThree]}>
        <Text>Blue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 5,
    margin: 8
  },
  cardOne: {
    backgroundColor: 'red'
  },
  cardTwo: {
    backgroundColor: 'green'
  },
  cardThree: {
    backgroundColor: 'blue'
  }
});
