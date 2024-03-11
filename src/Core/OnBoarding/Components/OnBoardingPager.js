import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import styles from '../styles';
import OnBoardingPage from './OnBoardingPage';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OnBoardingPager = ({ onSkipPressed, OnBoardDataList }) => {

  console.log('Onborading Pager');
  const swiperRef = useRef(null);
  const selectedIndex = useRef(0);

  function moveNext() {
    if (selectedIndex.current == 3) {
      onSkipPressed()
    } else {
      swiperRef.current.scrollBy(1, true)
    }
  }

  const dotComponent = <Ionicons name="heart-outline" size={18} color="black" style={{ marginRight: 8 }} />

  const activeDotComponent = <Ionicons name="heart" size={18} color="#74B9FF" style={{ marginRight: 8 }} />

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Swiper
        dot={dotComponent}
        activeDot={activeDotComponent}
        paginationStyle={{
          position: 'absolute',
          bottom: 160, // Adjust as needed
        }}
      >
        {OnBoardDataList.map((item) => {
          return (
            <OnBoardingPage
              item={item}
              key={item.id}
            />
          )
        })}
      </Swiper>
    </View >
  )
}

export default OnBoardingPager