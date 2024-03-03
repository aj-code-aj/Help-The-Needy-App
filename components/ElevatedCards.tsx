import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const ElevatedCards = () => {
  return (
    <>
      <Text>ElevatedCards</Text>
      <ScrollView style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={[styles.cards, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.cards, styles.cardElevated]}>
          <Text>See</Text>
        </View>
        <View style={[styles.cards]}>
          <Text>More</Text>
        </View>
        <View style={[styles.cards]}>
          <Text>More</Text>
        </View>
        <View style={[styles.cards]}>
          <Text>🙏</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  cards: {
    flex: 1,
    direction: 'ltr',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 8,
    marginRight: 5
  },
  cardElevated: {
    color: 'yellow',
    elevation: 14,
    shadowColor: 'red',
    shadowOffset: {
      height: 12,
      width: 42
    },
    shadowRadius: 2
  }
})
export default ElevatedCards