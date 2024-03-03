import React from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignupLogin = ({ heading }) => {
  return (
    <View>
      <Text variant="headlineMedium" style={styles.mainText}>{heading}</Text>
      {/* <MaterialCommunityIcons name="account-group" size={40} color={'#74B9FF'} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 27,
    color: '#000000'
  }
})
export default SignupLogin