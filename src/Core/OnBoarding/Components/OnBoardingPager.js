import React, { useRef } from 'react'
import { Alert, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import OnBoardingPage from './OnBoardingPage';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OnBoardingPager = ({ onSkipPressed, OnBoardDataList }) => {

  console.log('Onborading Pager');
  const swiperRef = useRef(null);
  const selectedIndex = useRef(0);

  function moveNext() {
    console.log('MOVE NEXT CALLED', selectedIndex.current);
    if (selectedIndex.current == 2) {
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
        index={0}
        ref={swiperRef}
        loop={false}
        activeDot={activeDotComponent}
        onIndexChanged={(i) => selectedIndex.current = i}
        autoplay={false}
        paginationStyle={{
          position: 'absolute',
          bottom: 160,
        }}
      >
        {OnBoardDataList.map((item) => {
          return (
            <OnBoardingPage
              item={item}
              key={item.id}
              moveNext={moveNext}
              onSkipPressed={onSkipPressed}
              selectedIndex={selectedIndex}
            />
          )
        })}
      </Swiper>
    </View >
  )
}

export default OnBoardingPager