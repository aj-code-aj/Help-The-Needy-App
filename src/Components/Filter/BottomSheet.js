import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheet, ListItem } from '@rneui/themed';
import { Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FilterBottomSheet = ({ bottomSheet }) => {

  const { visible, toggleBottomSheet } = bottomSheet;

  return (
    <SafeAreaView>
      <BottomSheet isVisible={visible}
        onBackdropPress={toggleBottomSheet}
      >
        <ListItem
          key={''}
          containerStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ paddingBottom: 12, fontWeight: '700', fontSize: 14, color: '#808080' }}>Filter by Category</Text>
              <TouchableOpacity onPress={toggleBottomSheet}>
                <Ionicons name="close-outline" color="#000" size={28} style={{ marginRight: 10 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Button icon={() => <FontAwesome5 name="book" size={18} color="#000" />} mode="elevated" onPress={() => console.log('Pressed')}
                buttonColor='#fff' textColor='#000'
              >
                Books
              </Button>
              <Button icon={() => <MaterialCommunityIcons name="shoe-sneaker" color="#000" size={22} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Shoes
              </Button>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
              <Button icon={() => <FontAwesome6 name="bowl-food" color="#000" size={18} />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'>
                Food
              </Button>
              <Button icon={() => <FontAwesome5 name="tshirt" color="#000" />} mode="elevated" onPress={() => console.log('Pressed')}
                textColor='#000' buttonColor='#fff'
              >
                Clothes
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

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={{
                backgroundColor: '#74B9FF',
                padding: 12,
                borderRadius: 12,
                width: '90%',
                marginTop: 30,
              }}
              >
                <Text style={{ color: "#fff", textAlign: 'center', fontSize: 16 }}>
                  Apply Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: '#74B9FF', marginTop: 20, }}>Clear All</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ListItem>
      </BottomSheet>
    </SafeAreaView >
  )
}

export default FilterBottomSheet