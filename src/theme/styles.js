import { Platform, StyleSheet } from 'react-native';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    itemContainer: {
      flex: 8,
    },
    backgroundImageStyle: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      right: 0,
    },
    gradientContainer: {
      alignItems: 'center',
    },
    gradientStyle: {
      flexDirection: 'row',
      flex: 1,
    },
    bottomContainer: {
      alignItems: 'center',
      bottom: 30,
    },
    textStyle: {
      fontSize: 28,
      color: '#1F1F1F',
      lineHeight: 34,
      fontWeight: '300',
      // fontFamily: DynamicAppStyles.fontFamily.samibold,
    },
    textStyle1: {
      fontSize: 16,
      color: '#000000',
      lineHeight: 22,
      fontWeight: '400',
      // fontFamily: DynamicAppStyles.fontFamily.samibold,
    },
    bottomButton: {
      flex: 2,
      marginLeft: 16,
      marginRight: 16,
      top: Platform.OS === 'android' ? 40 : 0,
      marginBottom: Platform.OS === 'ios' ? 41 : 0,
    },
    gradientButtonStyle: {
      width: 343,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 22,
      // fontFamily: DynamicAppStyles.fontFamily.semibold,
    },
    profileImageStyle: {
      height: 180,
      width: 180,
      borderRadius: 95,
    },
    gradientImageStyle1: {
      height: 187,
      width: 187,
      padding: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      top: 35, left: 42, zIndex: 80
    },
    gradientImageStyle2: {
      height: 187,
      width: 187,
      padding: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      top: 150, left: -25
    }
  });
};
export default styles;
