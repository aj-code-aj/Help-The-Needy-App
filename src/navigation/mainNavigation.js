import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Details from '../screens/Categories';
import BottomTabNavigator from './bottomTabNavigator';
import OTPTextInput from '../Components/OTPTextInput';
import Header from '../Simple/Header/Header';

const Stack = createStackNavigator();

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
          header: () => (<Header />),
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