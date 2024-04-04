import React, { useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Chip = ({ filterItemsList, onSelectionList, toggleBottomSheet }) => {

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 }}>
      {item.map(chip => (
        <TouchableOpacity>
          <Button
            key={chip.id}
            icon={() => chip.selected ? chip.selectedIcon : chip.icon}
            mode="elevated"
            onPressIn={() => onSelectionList(chip.id)}
            rippleColor='#fff'
            buttonColor={chip.selected ? '#74B9FF' : '#fff'}
            textColor={chip.selected ? '#fff' : '#000'}
          >
            {chip.category}
          </Button>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <FlatList
      data={filterItemsList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={() => <View style={{ alignItems: 'center' }}>
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
      </View>}
      ListHeaderComponent={() => <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ paddingBottom: 12, fontWeight: '700', fontSize: 14, color: '#808080' }}>Filter by Category</Text>
        <TouchableOpacity onPress={toggleBottomSheet}>
          <Ionicons name="close-outline" color="#000" size={30} style={{ marginRight: 10 }} />
        </TouchableOpacity>
      </View>}
    />
  );
};

export default Chip;