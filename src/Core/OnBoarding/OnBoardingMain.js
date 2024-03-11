import React from 'react'
import { Text, View } from 'react-native'
import OnBoardingPager from './Components/OnBoardingPager';

const OnBoardingMain = ({ navigateTo, OnBoardDataList }) => {
  console.log('Onborading Main');
  const onSkipPressed = async () => {
    // await authManager.setFirstTimeAppOpened();
    navigateTo('LoginSignUp');
  }

  return (
    < OnBoardingPager
      onSkipPressed={onSkipPressed}
      OnBoardDataList={OnBoardDataList} />
  )
}

export default OnBoardingMain