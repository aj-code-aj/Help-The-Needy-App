import React from 'react';
import OnBoardingMain from '../../Core/OnBoarding/OnBoardingMain';
import Carton from '../../assets/common/carton1.svg';
import Carton2 from '../../assets/common/carton2.svg';
import { Image } from 'react-native';

const OnBoarding = ({ navigation }) => {
  console.log('ONboarding');
  const OnBoardDataList = [
    {
      id: '1',
      heading: `Welcome to HelpTheNeedy`,
      description: "Join our community dedicated to making a difference! Whether it's clothes, food, or education materials, your donations can change lives",
      image: < Carton width={200} height={200} />,
      btnText: 'Next',
    },
    {
      id: '2',
      heading: 'Find Causes That Matter',
      description: `From supporting local shelters to global relief efforts, HelpTheNeedy makes it easy to find causes that resonate with you. `,
      image: (
        <Carton2
          width={180}
          height={180}
          style={{
            marginVertical: 32,
          }}
        />
      ),
      btnText: 'Next',
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
      btnText: 'Next',
    },
  ];

  const navigateTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <OnBoardingMain navigateTo={navigateTo} OnBoardDataList={OnBoardDataList} />
  );
};

export default OnBoarding;