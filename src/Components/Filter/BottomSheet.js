import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheet, ListItem } from '@rneui/themed';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FilterBottomSheet = () => {


  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <Image source={require('../../assets/common/MyFilter.png')} style={{ width: 30, height: 35, marginRight: 15 }} />
      </TouchableOpacity>
      <BottomSheet isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}
      >
        <ListItem
          key={''}
          containerStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
        // onPress={l.onPress}
        >
          <View style={{ flex: 1 }}>
            <ListItem.Title style={{ paddingBottom: 12, fontWeight: '700', fontSize: 14, color: '#808080' }}>Filter by Category</ListItem.Title>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Button icon={() => <FontAwesome5 name="book" size={18} color="#000" />} mode="elevated" onPress={() => console.log('Pressed')}
                buttonColor='#fff' textColor='#000'
              >
                Books
              </Button>
              <Button icon={() => <FontAwesome5 name="tshirt" color="#000" />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'
              // style={{ borderColor: '#74B9FF', borderWidth: 2 }}
              >
                Clothes
              </Button>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
              <Button icon={() => <FontAwesome6 name="bowl-food" color="#000" size={18} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Food
              </Button>
              <Button icon={() => <MaterialCommunityIcons name="shoe-sneaker" color="#000" size={22} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Shoes
              </Button>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
              <Button icon={() => <MaterialIcons name="toys" color="#000" size={18} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Toys
              </Button>
              <Button icon={() => <MaterialCommunityIcons name="medical-bag" color="#000" size={18} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Medical
              </Button>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
              <Button icon={() => <MaterialIcons name="electrical-services" color="#000" size={18} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Electronics
              </Button>
              <Button icon={() => <MaterialCommunityIcons name="table-furniture" color="#000" size={20} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Furniture
              </Button>
            </View>


          </View>
        </ListItem>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default FilterBottomSheet