import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import Home from '../screens/Home';
import Details from '../screens/Details';
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
        tabBar={props => (
          <TabBar
            {...props}
          />
        )}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
        />
        <Tabs.Screen
          name="Donate"
          component={Details}
          initialParams={{ productId: 1 }}
        />
        <Tabs.Screen
          name="You"
          component={Details}
          initialParams={{ productId: 1 }}
        />
      </Tabs.Navigator>
    </View>
  )
}

export default BottomTabNavigator