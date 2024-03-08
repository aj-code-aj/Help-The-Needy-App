import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();
const Home = ({ navigation }) => {

  console.log('HOME SCREEN');
  return (
    // <ImageBackground source={require('../../images/bg1.jpeg')} style={Styles.image}>
      <View style={Styles.container}>
        <Text style={Styles.smallText}></Text>
        <Button
          title='Go to Details'
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    // </ImageBackground>
  )
}

export default Home;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
    fontSize: 22
  },
  image: {
    flex: 1,
    width: '395',
    height: '720'
  }
})