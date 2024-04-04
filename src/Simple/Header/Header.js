import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilterBottomSheet from '../../Components/Filter/BottomSheet';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { data } from '../../data/cities';

const Header = () => {

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [filteredCity, setFilteredCity] = useState([]);
  const [searchedCity, setSearchedCity] = useState('');

  const handleSelectedCity = (city, code) => {
    setSearchedCity(`${city}, ${code}`);
    setFilteredCity('');
  }

  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  }

  const handleClearIcon = () => {
    searchedCity ? setSearchedCity('') : setIsSearchBarVisible(false);
  }

  const toggleSearchBar = () => {
    setIsSearchBarVisible(true);
    filteredCity && setFilteredCity(''), setSearchedCity('');
  }

  const handleChange = (e) => {
    setSearchedCity(e);
    if (e && e.at(0) != e.at(0).toUpperCase()) {
      e = e.at(0).toUpperCase() + e.slice(1);
    }
    const filtered = data.filter(({ name }) => name.includes(e));
    setFilteredCity(filtered.slice(0, 5));
  }

  return (

    isSearchBarVisible ?
      (
        <View style={{ backgroundColor: '#fff', }}>
          <View style={{ marginTop: 10, marginHorizontal: 15 }}>
            <Searchbar
              placeholder="Search by location"
              style={{ backgroundColor: '#fff', borderWidth: 2, borderColor: '#74B9FF', }}
              elevation={3}
              right={() => <TouchableOpacity onPress={handleClearIcon}><Ionicons name="close-outline" color="#000" size={28} style={{ marginRight: 10 }} /></TouchableOpacity>}
              onChangeText={handleChange}
              value={searchedCity}
            />
            <View style={{
              backgroundColor: '#fff',
              elevation: 20,
              shadowColor: '#000',
              borderRadius: 10,
            }}>
              <FlatList
                data={filteredCity}
                renderItem={({ item }) => (
                  <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    marginVertical: 8,
                    flexWrap: 'wrap'
                  }}>
                    <MaterialCommunityIcons name="map-marker" size={18} color="grey" style={{ paddingHorizontal: 5 }} />
                    <TouchableOpacity onPress={() => handleSelectedCity(item.name, item.code)}>
                      <Text style={{ color: '#000', fontSize: 15, fontWeight: '700' }}>{`${item.name}, ${item.code}`}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      )
      :

      (
        <View style={{ backgroundColor: '#74B9FF' }}>
          <View style={{ flexDirection: 'row', marginVertical: 15, marginHorizontal: 8, }}>
            <Text style={{ fontSize: 19, fontWeight: '700', color: '#fff' }}>HelpTheNeedy</Text>
            <View style={{
              flexDirection: 'row', position: 'absolute', right: 0,
            }}>
              <TouchableOpacity onPress={toggleBottomSheet}>
                <Image source={require('../../assets/common/MyFilter.png')} style={{ width: 30, height: 35, marginRight: 15, }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={toggleSearchBar}>
                <MaterialIcons
                  name='search'
                  size={25}
                  style={{ marginRight: 8, marginTop: 3 }}
                  color='#fff'
                />
              </TouchableOpacity>
            </View>
          </View>
          {
            isBottomSheetVisible && <FilterBottomSheet bottomSheet={{ visible: isBottomSheetVisible, toggleBottomSheet: toggleBottomSheet }} />
          }
        </View>
      )
  )
}

export default Header