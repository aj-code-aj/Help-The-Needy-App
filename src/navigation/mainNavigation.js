import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Details from '../screens/Details';
import BottomTabNavigator from './bottomTabNavigator';
import OTPTextInput from '../Components/OTPTextInput';
import FilterBottomSheet from '../Components/Filter/BottomSheet';

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
          title: 'HelpTheNeedy',
          headerStyle: {
            backgroundColor: '#74B9FF',
          },
          headerTintColor: '#fff',
          headerRight: () => (<FilterBottomSheet />),
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