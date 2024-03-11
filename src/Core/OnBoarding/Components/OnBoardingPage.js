import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper';

const OnBoardingPage = ({ item }) => {
  console.log('OnBoardingPage', item);
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
    }}>
      <View style={{ marginTop: 30 }}>
        {item.image}
      </View>
      <Text style={{
        color: 'black', fontSize: 19, fontWeight: 'bold', marginTop: 25
      }}>{item.heading}</Text>
      <Text style={{
        color: '#808080', textAlign: 'center',
        marginTop: 32,
        paddingHorizontal: 30,
        marginBottom: 10
      }}>{item.description}</Text>
      <View style={{
        position: 'absolute',
        bottom: 40,
      }}>
        <Button
          contentStyle={{ width: '99%' }}
          labelStyle={{
            fontSize: 15,
            color: "#000"
          }}
          mode="elevated" buttonColor="#74B9FF" onPress={() => console.log('Pressed')}>
          Continue
        </Button>
        <Text
          style={{ textAlign: 'center', marginTop: 12 }}>
          Got a profile? Sign in</Text>
      </View>
    </View >
  )
}

export default OnBoardingPage