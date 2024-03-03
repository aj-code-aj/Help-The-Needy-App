import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { Text } from 'react-native-paper';
// import DynamicAppStyles from '../../../theme/DynamicAppStyles';

const TabBarIcon = ({ isFocused, route, onPress, icon, title }) => {
  console.log('TAB BAR ICON');

  return (
    <View
      style={{
        height: 70,
        width: Dimensions.get('window').width / 3,
        borderRadius: 70,
        overflow: 'hidden',
      }}>
      <Ripple
        onPress={() => onPress(isFocused, route)}
        rippleColor={'#74B9FF'}
        rippleOpacity={0.99}
        rippleDuration={400}
        rippleSize={200}>
        <View
          style={{
            height: 70,
            width: Dimensions.get('window').width / 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={[
              styles.containerStyle,
              title === 'Donate' && styles.centerButton,
            ]}>
            {icon}
            <Text
              style={[styles.homeStyle, styles.textStyle,
              { color: isFocused ? '#74B9FF' : '#000000' }]}
            >
              {title}
            </Text>
          </View>
        </View>
      </Ripple >
    </View >
  );
};

const equal = (prev, next) => {
  if (prev.isFocused !== next.isFocused) {
    return false;
  }
  return true;
};

export default React.memo(TabBarIcon, equal);

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 13,
    fontWeight: '900',
    lineHeight: 14,
    marginTop: 6,
    width: 80,
    height: 15,
    // fontFamily: DynamicAppStyles.fontFamily.light,
    textAlign: 'center',
  },
  centerButton: {
    position: 'absolute',
    bottom: 20, // Adjust the position of the center button vertically
    width: 70, // Adjust the width of the center button as needed
    height: 40, // Adjust the height of the center button as needed
    borderRadius: 40, // Make the center button round
    // backgroundColor: '#ffffff', // Change center button background color here
  },
  homeStyle: {
    fontSize: 13,
    fontWeight: '700',
    marginTop: 5,
    lineHeight: 15,
    width: 80,
    height: 15,
    // fontFamily: DynamicAppStyles.fontFamily.semibold,
    textAlign: 'center',
  },
});
