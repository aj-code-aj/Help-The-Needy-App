import React from 'react'
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Chip, TouchableRipple } from 'react-native-paper';

const Categories = () => {

  const filterItemsList = [
    [
      {
        id: 1,
        category: 'Food',
        icon: <FontAwesome6 name="bowl-food" size={50} color="#87868b" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selectedIcon: <FontAwesome6 name="bowl-food" size={50} color="#fff" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selected: false,
      },
      {
        id: 2,
        category: 'Clothes',
        icon: <FontAwesome5 name="tshirt" color="#000" size={45} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selectedIcon: <FontAwesome5 name="tshirt" color="#fff" size={45} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selected: false,
      }
    ],
    [
      {
        id: 3,
        category: 'Books',
        icon: <FontAwesome5 name="book" size={45} color="#000" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selectedIcon: <FontAwesome5 name="book" size={45} color="#fff" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selected: false,
      },
      {
        id: 4,
        category: 'Shoes',
        icon: <MaterialCommunityIcons name="shoe-sneaker" color="#000" size={65} style={{ paddingHorizontal: 22, paddingVertical: 20 }} />,
        selectedIcon: <MaterialCommunityIcons name="shoe-sneaker" color="#fff" size={65} style={{ paddingHorizontal: 22, paddingVertical: 20 }} />,
        selected: false,
      }
    ],
    [
      {
        id: 5,
        category: 'Toys',
        icon: <MaterialIcons name="toys" size={50} color="#000" style={{ paddingHorizontal: 28, paddingVertical: 28 }} />,
        selectedIcon: <MaterialIcons name="toys" size={50} color="#fff" style={{ paddingHorizontal: 28, paddingVertical: 28 }} />,
        selected: false,
      },
      {
        id: 6,
        category: 'Medical',
        icon: <MaterialCommunityIcons name="medical-bag" color="#000" size={48} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selectedIcon: <MaterialCommunityIcons name="medical-bag" color="#000" size={48} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selected: false,
      }
    ],
    [
      {
        id: 7,
        category: 'Electronics',
        icon: <MaterialIcons name="electrical-services" size={50} color="#000" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selectedIcon: <MaterialIcons name="electrical-services" size={50} color="#fff" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selected: false,
      },
      {
        id: 8,
        category: 'Furniture',
        icon: <MaterialCommunityIcons name="table-furniture" color="#000" size={48} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selectedIcon: <MaterialCommunityIcons name="table-furniture" color="#fff" size={48} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />,
        selected: false,
      }
    ]
  ];

  const renderItem = ({ item }) => (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 23,
    }}>
      {item.map(chip => (
        <View style={{
          alignItems: 'center',
        }}>
          <TouchableOpacity>
            <Chip
              icon={() => chip.selected ? chip.selectedIcon : chip.icon}
              onPress={() => console.log('Pressed')}
              mode='elevated'
              style={{ backgroundColor: '#f4f4f6' }}
            />
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, fontWeight: '900' }}>{chip.category}</Text>
        </View>
      ))}
    </View>
  );


  return (
    <ImageBackground source={require('../../images/bg1.jpeg')} style={styles.image}>
      <View style={{ flex: 1 }}>

        <Text style={{
          color: '#000', fontSize: 25, fontWeight: 700, marginHorizontal: 12,
          marginVertical: 22
        }}>I want to donate...</Text>

        <FlatList
          data={filterItemsList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        // ListFooterComponent={() => <View style={{ alignItems: 'center' }}>
        //   <TouchableOpacity style={{
        //     backgroundColor: '#74B9FF',
        //     padding: 12,
        //     borderRadius: 12,
        //     width: '90%',
        //     marginTop: 30,
        //   }}
        />

        {/* <ScrollView>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 23,
          }}>
            <View style={{
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <FontAwesome6 name="bowl-food" size={50} color="#000" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='elevated'
                  style={{ backgroundColor: '#f4f4f6' }}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, fontWeight: '900' }}>Food</Text>
            </View>

            <View style={{
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <FontAwesome5 name="tshirt" color="#000" size={45} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='elevated'
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, }}>Clothes</Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 23,
          }}>
            <View style={{
              // alignItems: 'stretch',
              // justifyContent: 'flex-end'
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <FontAwesome5 name="book" size={45} color="#000" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='outlined'
                  style={{}}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, }}>Food</Text>
            </View>

            <View style={{
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <MaterialCommunityIcons name="shoe-sneaker" color="#000" size={65} style={{ paddingHorizontal: 22, paddingVertical: 20 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='outlined'
                  style={{}}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, }}>Clothes</Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 23,
          }}>
            <View style={{
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <MaterialIcons name="toys" size={50} color="#000" style={{ paddingHorizontal: 28, paddingVertical: 28 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='outlined'
                  style={{}}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, }}>Food</Text>
            </View>

            <View style={{
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <MaterialCommunityIcons name="medical-bag" color="#000" size={48} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='outlined'
                  style={{}}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, }}>Clothes</Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 23,
          }}>
            <View style={{
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <MaterialIcons name="electrical-services" size={50} color="#000" style={{ paddingHorizontal: 30, paddingVertical: 30 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='outlined'
                  style={{}}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, }}>Food</Text>
            </View>

            <View style={{
              alignItems: 'center',
            }}>
              <TouchableOpacity>
                <Chip
                  icon={() =>
                    <MaterialCommunityIcons name="table-furniture" color="#000" size={48} style={{ paddingHorizontal: 30, paddingVertical: 30 }} />}
                  // onPress={() => console.log('Pressed')}
                  mode='outlined'
                  style={{}}
                />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', color: '#000', marginVertical: 5, }}>Clothes</Text>
            </View>
          </View>
        </ScrollView> */}
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
  }
})

export default Categories;