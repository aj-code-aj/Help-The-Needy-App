import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  paginationStyle: {
    top: Platform.OS == 'ios' ? 60 : 20,
    bottom: null,
    right: 30,
    left: 30
  },
  dotStyle: {
    backgroundColor: 'red',
    height: 5,
    width: 5,
    borderRadius: 2.5,
    marginHorizontal: 6
  },
  activeDotStyle: {
    height: 5,
    width: 12,
    borderRadius: 2.5,
    marginHorizontal: 6
  }
})
