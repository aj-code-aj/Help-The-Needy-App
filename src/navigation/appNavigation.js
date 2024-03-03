import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react'
import MainNavigation from './mainNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, Text, View, useColorScheme } from 'react-native';
import LoginSignUpMain from '../Core/Authentication/LoginSignup/LoginSignupMain';
// import LoginSignUpMain from '../Core/Authentication/LoginSignup/LoginSignUpMain';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';

const RootNavigator = () => {
  console.log('ROOT NAVIGATOR');
  return (
    // <Stack.Navigator initialRouteName='LoginSignUp'>
    <Stack.Screen
      name="LoginSignUp"
      component={LoginSignUpMain}
    />
    // </Stack.Navigator >
  )
}

const Stack = createStackNavigator();
const AppNavigator = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MainNavigation />
      {/* <RootNavigator /> */}
    </NavigationContainer>
  )
}

export default AppNavigator