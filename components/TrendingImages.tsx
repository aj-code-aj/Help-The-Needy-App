import React from 'react'
import { Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TrendingImages = () => {

  const openWebsite = async (weblink: string) => {
    Linking.canOpenURL(weblink);
  }

  return (
    <View>
      <Text>Trending Images</Text>
      <View style={styles.card}>
        <Image source={{ uri: 'https://img.freepik.com/premium-psd/ayodhya-ram-mandir-side-view_791325-32.jpg' }}
          accessibilityLabel='Ayodhya'
          height={252}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Ayodhya Pic</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident illum, blanditiis amet ab odio iste.
            Loremfgf ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ratione quae velit molestias sint illum a modi laboriosam exercitationem suscipit quia ipsum eum magni cum ex doloremque porro adipisci, odio delectus est ipsam, ea provident dolor fugit! Voluptate aliquid nisi consequatur officia.</Text>
          <TouchableOpacity onPress={() => openWebsite(' https://expo.io')}>
            <Text style={styles.readMore}>Read More..</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'red',
    borderRadius: 10,
    shadowOffset: {
      width: 35,
      height: 715
    },
    backgroundColor: '#ffffff',
    elevation: 4,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  cardImage: {
    borderRadius: 10
  },
  cardDescription: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    color: 'black'
  },
  cardBody: {

  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  readMore: {
    color: '#000000'
  }
})
export default TrendingImages