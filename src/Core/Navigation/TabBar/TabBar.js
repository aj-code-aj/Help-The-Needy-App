import React from 'react';
import { View, FlatList } from 'react-native';
import TabbarIcon from '../Components/TabBarIcon';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

function TabBar({
  state,
  descriptors,
  navigation,
  unReadMessages = 0,
  unSeenNotifications = 0,
  isPlanActive = false,
  appIcons,
}) {
  console.log('TAB BAR ');
  const tabIconsList = [
    {
      id: 0,
      name: '',
      focusedIcon: <Feather name="home" color={'#74B9FF'} size={22}
      />,
      notFocusedICon: <Feather name="home" color={'#000000'} size={22} />,
      label: 'Home',
      route: state.routes[0],
      isFocused: state.index === 0,
    },
    {
      id: 1,
      name: '',
      focusedIcon: <MaterialCommunityIcons name="charity" color={'#74B9FF'} size={30} />,
      notFocusedICon: (
        <MaterialCommunityIcons name="charity" color={'#000000'} size={30} />
      ),
      route: state.routes[1],
      label: 'Donate',
      isFocused: state.index === 1,
      notify: unSeenNotifications,
    },
    {
      id: 2,
      name: '',
      focusedIcon: (
        <FontAwesome6 name="user" color={'#74B9FF'} size={22} />
      ),
      notFocusedICon: <FontAwesome6 name="user" color={'#000000'} size={22} />,
      route: state.routes[2],
      label: 'You',
      isFocused: state.index === 2,
      notify: unSeenNotifications,
    },
  ];

  const onPress = (isFocused, route) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The merge: true option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const renderItem = ({ item }) => (
    <TabbarIcon
      isFocused={item.isFocused}
      onPress={onPress}
      title={item.label}
      route={item.route}
      icon={item.isFocused ? item.focusedIcon : item.notFocusedICon}
      notify={item.notify}
    />
  );

  return (
    <View>
      <FlatList
        data={tabIconsList}
        bounces={false}
        style={{ height: 57, marginBottom: 5}}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const equal = (prev, next) => {
  if (prev.state.index !== next.state.index) {
    return false;
  }
  return true;
};

export default TabBar;
