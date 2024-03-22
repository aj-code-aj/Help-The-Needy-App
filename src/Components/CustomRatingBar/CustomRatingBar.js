import React from 'react'
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomRatingBar = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Ionicons name="star-sharp" color="#FDCC0D" size={15} />
      <Ionicons name="star-sharp" color="#FDCC0D" size={15} />
      <Ionicons name="star-sharp" color="#FDCC0D" size={15} />
      <Ionicons name="star-outline" color="#000" size={14} />
      <Ionicons name="star-outline" color="#000" size={14} />
    </View>
  )
}

export default CustomRatingBar