import React from 'react'
import { Text, View } from 'react-native'
import OnBoardingPager from './Components/OnBoardingPager';

const OnBoardingMain = ({ navigateTo, OnBoardDataList }) => {
  console.log('Onborading Main');
  const onSkipPressed = async (screen = 'MainNavigation') => {
    // await authManager.setFirstTimeAppOpened();
    navigateTo(screen);
  }

  return (
    < OnBoardingPager
      onSkipPressed={onSkipPressed}
      OnBoardDataList={OnBoardDataList} />
  )
}

export default OnBoardingMain