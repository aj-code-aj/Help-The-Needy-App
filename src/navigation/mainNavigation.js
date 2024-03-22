import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Details from '../screens/Details';
import BottomTabNavigator from './bottomTabNavigator';
import OTPTextInput from '../Components/OTPTextInput';
import FilterIcon from '../assets/svg/Filter.svg';

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
          headerRight: () => (<FilterIcon width={25} height={25} color="#fff"/>),
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