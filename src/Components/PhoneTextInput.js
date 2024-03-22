import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FbIcon from '../assets/svg/facebookIcon.svg';
import GoogleIcon from '../assets/svg/googleIcon.svg';

const PhoneTextInput = ({ onChangeNumber, phone, onInputPressed,
  onGoogleButtonPressed, onFacebookButtonPress }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="login" size={42} style={{
          color: "#0A79DF",
          marginTop: 26,
        }} />
      </View>
      <Text style={styles.subText}>Connect with</Text>
      <View style={{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      }}>
        <TouchableOpacity
          onPress={onFacebookButtonPress}>
          <FbIcon
            width={50}
            height={32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onGoogleButtonPressed}>
          <GoogleIcon
            width={50}
            height={30}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ width: "100%", paddingHorizontal: 22, paddingVertical: 40 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 60,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: "#111",
                borderBottomWidth: 1,
                flexDirection: "row",
                fontSize: 12,
              }}
              onPress={() => console.log('Flag Presed')}
            >
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Image
                  source={require('../assets/india.png')}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 30
                  }}
                />
              </View>

              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text style={{ color: "#111", fontSize: 12 }}>+91</Text>
              </View>
            </TouchableOpacity>
            {/* Phone Number Text Input */}
            <View style={{ flex: 1 }}>
              <TextInput
                mode="outlined"
                label="Mobile Number"
                onChangeText={onChangeNumber}
                onFocus={onInputPressed}
                style={{
                  flex: 1,
                  fontSize: 16,
                  color: "#111",
                }}
                theme={{ colors: { primary: '#74B9FF' } }}
                selectionColor="#74B9FF"
                keyboardType="numeric"
                value={phone.value}
              />
              {phone.isError && <Text style={{ color: 'red', marginTop: 5 }}>Please enter a valid number !</Text>}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  socialIcons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subText: {
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    fontWeight: '500'
  }
})

export default PhoneTextInput