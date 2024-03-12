import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home';
import Details from '../screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from './bottomTabNavigator';
import LoginSignUpMain from '../Core/Authentication/LoginSignup/LoginSignupMain';
import OTPTextInput from '../Components/OTPTextInput';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const MainNavigation = ({ route }) => {
  const appIcons = route.params.appIcons;

  console.log('MainNavigation');
  return (
    <Stack.Navigator
      initialRouteName='dashboard'
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
          headerBackVisible: false
        }}
        initialParams={{
          appIcons: appIcons
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