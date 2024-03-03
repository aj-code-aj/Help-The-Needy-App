import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const backgroundImage = require('../images/bg1.jpeg');

const CustomNavigationContainer = ({ children }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    // Additional styles for the background image container can be added here
  },
});

export default CustomNavigationContainer;
