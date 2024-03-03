import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Home from '../screens/Home';
import Details from '../screens/Details';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainNavigation from './mainNavigation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabBar from '../Core/Navigation/TabBar/TabBar';

const Tabs = createBottomTabNavigator();
const BottomTabNavigator = () => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff'
      }}>
      <Tabs.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
        // activeColor='#74B9FF'
        // inactiveColor='#7B8788'
        // barStyle={{ backgroundColor: '#000000' }}
        tabBar={props => (
          <TabBar
            {...props}
          // appIcons={appIcons}
          // DynamicAppStyles={DynamicAppStyles}
          // isPlanActive={false}
          />
        )}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarIcon: ({ focused, color, size }) => (
            //   focused ? <Feather name="home" color={'#74B9FF'} size={20}
            //   /> : <Feather name="home" color={'#7B8788'} size={20} />
            // )
          }}
        />
        <Tabs.Screen
          name="Donate"
          component={Details}
          initialParams={{ productId: 1 }}
        // options={{
        //   tabBarIcon: ({ focused, color, size }) => (
        //     focused ? <MaterialCommunityIcons name="charity" color={'#74B9FF'} size={20} /> : <MaterialCommunityIcons name="charity" color={'#7B8788'} size={20} />
        //   )
        // }}
        />
        <Tabs.Screen
          name="You"
          component={Details}
          initialParams={{ productId: 1 }}
          options={{
            // tabBarIcon: ({ focused, color, size }) => (
            //   focused ? <FontAwesome6 name="user" color={'#74B9FF'} size={20} /> : <FontAwesome6 name="user" color={'#7B8788'} size={20} />
            // )
          }}
        />
      </Tabs.Navigator>
    </View>
  )
}

export default BottomTabNavigator