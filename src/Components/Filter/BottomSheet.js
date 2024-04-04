import React, { useReducer } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheet, ListItem } from '@rneui/themed';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chip from '../../Simple/Chip';

const FilterBottomSheet = ({ bottomSheet }) => {

  const { visible, toggleBottomSheet } = bottomSheet;
  const filterItemsList = [
    [
      {
        id: 1,
        category: 'Books',
        icon: <FontAwesome5 name="book" size={18} color="#000" />,
        selectedIcon: <FontAwesome5 name="book" size={18} color="#fff" />,
        selected: false,
      },
      {
        id: 2,
        category: 'Shoes',
        icon: <MaterialCommunityIcons name="shoe-sneaker" color="#000" size={22} />,
        selectedIcon: <MaterialCommunityIcons name="shoe-sneaker" color="#fff" size={22} />,
        selected: false,
      }
    ],
    [
      {
        id: 3,
        category: 'Food',
        icon: <FontAwesome6 name="bowl-food" color="#000" size={18} />,
        selectedIcon: <FontAwesome6 name="bowl-food" color="#fff" size={18} />,
        selected: false,
      },
      {
        id: 4,
        category: 'Clothes',
        icon: <FontAwesome5 name="tshirt" color="#000" />,
        selectedIcon: <FontAwesome5 name="tshirt" color="#fff" />,
        selected: false,
      }
    ],
    [
      {
        id: 5,
        category: 'Toys',
        icon: <MaterialIcons name="toys" color="#000" size={18} />,
        selectedIcon: <MaterialIcons name="toys" color="#fff" size={18} />,
        selected: false,
      },
      {
        id: 6,
        category: 'Medical',
        icon: <MaterialCommunityIcons name="medical-bag" color="#000" size={18} />,
        selectedIcon: <MaterialCommunityIcons name="medical-bag" color="#fff" size={18} />,
        selected: false,
      }
    ],
    [
      {
        id: 7,
        category: 'Electronics',
        icon: <MaterialIcons name="electrical-services" color="#000" size={18} />,
        selectedIcon: <MaterialIcons name="electrical-services" color="#fff" size={18} />,
        selected: false,
      },
      {
        id: 8,
        category: 'Furniture',
        icon: <MaterialCommunityIcons name="table-furniture" color="#000" size={20} />,
        selectedIcon: <MaterialCommunityIcons name="table-furniture" color="#fff" size={20} />,
        selected: false,
      }
    ]
  ];

  const filterItemsReducer = (state, action) => {
    switch (action.type) {

      case 'SELECT_CATEGORY':
        return state.map(itemsArray =>
          itemsArray.map(item =>
            item.id === action.payload ? { ...item, selected: !item.selected } : item
          )
        )

      default: return state;
    }
  };

  const [filterItems, dispatch] = useReducer(filterItemsReducer, filterItemsList);

  const onSelectionList = (selectedId) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: selectedId });
  };

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
            <Chip
              filterItemsList={filterItems}
              onSelectionList={onSelectionList}
              toggleBottomSheet={toggleBottomSheet}
            />
          </View>

        </ListItem>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default FilterBottomSheet