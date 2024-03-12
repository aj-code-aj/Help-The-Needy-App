import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react'
import MainNavigation from './mainNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import OnBoardingPage from '../Core/OnBoarding/Components/OnBoardingPage';
import appIcons from '../theme/appIcons';
import OnBoarding from '../screens/OnBoarding/OnBoarding';
import LoginSignUpMain from '../Core/Authentication/LoginSignup/LoginSignupMain';
import Entypo from 'react-native-vector-icons/Entypo';

const RootNavigator = () => {
  console.log('ROOT NAVIGATOR');
  return (
    <Stack.Navigator initialRouteName='OnBoarding'
      screenOptions={{
        animationEnabled: false, headerShown: false,

      }}
    >
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        initialParams={{
          appIcons: appIcons
        }}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MainNavigation"
        component={MainNavigation}
        initialParams={{
          appIcons: appIcons
        }}
      />
      <Stack.Screen
        name="LoginSignUp"
        options={{
          headerShown: true,
          title: '',
          headerBackImage: () => <Entypo name="cross" color="black" size={35} />
        }}
        component={LoginSignUpMain}
      />
    </Stack.Navigator>
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
      {/* <MainNavigation /> */}
      <RootNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator