import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper';

const OnBoardingPage = ({ item, moveNext, selectedIndex, onSkipPressed }) => {
  console.log('OnBoardingPage', selectedIndex);
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
        marginBottom: 10,
        lineHeight: 20
      }}>{item.description}</Text>

      <View style={{
        position: 'absolute',
        bottom: 40,
        width: '75%',
      }}>
        <View style={{}}>
          <TouchableOpacity style={{
            backgroundColor: '#74B9FF',
            padding: 12,
            borderRadius: 12,
          }}
            onPress={moveNext}
          >
            <Text style={{ color: "#fff", textAlign: 'center' }}>
              {item.btnText}</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row', marginTop: 12, justifyContent: 'center',
        }}>
          <Text
            style={{ fontSize: 13, color: '#808080' }}>
            {`Got a profile? `}</Text>
          <TouchableOpacity
            onPress={() => onSkipPressed('LoginSignUp')}>
            <Text
              style={{ fontWeight: '700', fontSize: 13, color: '#808080' }}>
              {`SignIn`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default OnBoardingPage