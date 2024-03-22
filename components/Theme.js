import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const CustomBackgroundContainer = ({ children }) => {

  const backgroundImage = require('../images/bg1.jpeg');

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: width,
    height: height
  },
});

export default CustomBackgroundContainer;
