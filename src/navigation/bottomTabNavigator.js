import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import Home from '../screens/Home';
import Details from '../screens/Details';
import TabBar from '../Core/Navigation/TabBar/TabBar';
import appIcons from '../theme/appIcons';

const Tabs = createBottomTabNavigator();
const BottomTabNavigator = ({ route }) => {

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
            appIcons={appIcons}
          />
        )}
      >
        <Tabs.Screen
          name="Home"
          component={Home}
          initialParams={{ appIcons: route.params.appIcons }}
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
    </View >
  )
}

export default BottomTabNavigator