import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home';
import Details from '../screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './bottomTabNavigator';
import LoginSignUpMain from '../Core/Authentication/LoginSignup/LoginSignupMain';
import Entypo from 'react-native-vector-icons/Entypo';
import OTPTextInput from '../Components/OTPTextInput';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const MainNavigation = () => {
  console.log('MainNavigation');
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name='dashboard'
        component={BottomTabNavigator}
        options={{
          title: 'Help Needy',
          headerStyle: {
            backgroundColor: '#74B9FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            // fontWeight: 'bolder',
          },
        }}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title: 'Product Details',
          // headerShown: false
        }}
        initialParams={'1'}
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
      <Stack.Screen
        name="OTPTextInput"
        options={{
          headerShown: true,
          title: '',
        }}
        component={OTPTextInput}
      />
    </Stack.Navigator>
  )
}

export default MainNavigation