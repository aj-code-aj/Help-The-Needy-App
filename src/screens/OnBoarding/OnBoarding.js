import React from 'react';
import OnBoardingMain from '../../Core/OnBoarding/OnBoardingMain';
import Carton from '../../assets/common/carton1.svg';
import { Image } from 'react-native';

const OnBoarding = ({ navigation }) => {
  const OnBoardDataList = [
    {
      id: '1',
      heading: `Welcome to HelpTheNeedy`,
      description: "Join our community dedicated to making a difference! Whether it's clothes, food, or education materials, your donations can change lives",
      image: < Carton width={250} height={200} />,
      btnText: 'Continue',
    },
    {
      id: '2',
      heading: 'Find Causes That Matter',
      description: `From supporting local shelters to global relief efforts, HelpTheNeedy makes it easy to find causes that resonate with you. `,
      image: (
        <Image
          source={require('../../assets/common/carton2.png')}
          style={{ width: 150, height: 150, marginVertical: 32 }}
        />
      ),
      btnText: 'Continue',
    },
    {
      id: '3',
      heading: 'Donate with Ease',
      description: `Making a donation has never been simpler. With HelpTheNeedy, you can donate items or funds securely and conveniently.`,
      image: (
        <Image
          source={require('../../assets/common/carton4.jpg')}
          style={{ width: 200, height: 170, marginVertical: 32 }}
        />
      ),
      btnText: `Let's Go`,
    },
  ];

  const navigateTo = screenName => {
    navigation.replace(screenName);
  };

  return (
    <OnBoardingMain navigateTo={navigateTo} OnBoardDataList={OnBoardDataList} />
  );
};

export default OnBoarding;
