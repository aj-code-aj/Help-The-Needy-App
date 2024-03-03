import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Details = ({ route, navigation }) => {
  console.log('DETAIL SCreen');
  const { productId } = route.params;

  return (
    <ImageBackground source={require('../../images/bg1.jpeg')} style={styles.image}>
      <View style={styles.container}>
        <Text>Details: {productId}</Text>
        <Button
          title='Go to Home'
          onPress={() => navigation.navigate("LoginSignUp")}
        />
        {/* <Button
        title='Go to Home'
        onPress={() => navigation.goBack()}
      /> */}
      </View>
    </ImageBackground>
  )
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000'
  },
  image: {
    flex: 1,
  }
})