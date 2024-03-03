import styles from "./styles";
import DeviceInfo from 'react-native-device-info';

const Background = ({ }) => {
  const navigation = useNavigation();
  return (
    <Modal visible={true}>
      <View
        style={[
          styles.container,
          { paddingTop: DeviceInfo.hasNotch() === true ? 20 : 0 },
        ]}>
        <View style={styles.itemContainer}>
          <View style={styles.backgroundImageStyle}>
            {/* {loggedinProfile.wealth_status === 'Successful' ? (
              <appIcons.Masks.MatchCharms
                width={'100%'}
                preserveAspectRatio="none"
              />
            ) : (
              <appIcons.Masks.MatchWealthy
                width={'100%'}
                preserveAspectRatio="none"
              />
            )} */}
          </View>
          <View style={styles.gradientContainer}>
            {/* <appIcons.SvgIcon.BlackLogo height={32} width={32} marginTop={15} /> */}
            <Text style={styles.textStyle}>Some Text</Text>
          </View>
          <View style={styles.gradientStyle}>
            <LinearGradient
              colors={
                loggedinProfile.wealth_status === 'Successful'
                  ? ['#0013B4', '#1D64DC', '#1F35D8']
                  : ['#F31B5A', '#F04224']
              }
              start={{ x: 0.0, y: 0.5 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientImageStyle1}>
              <FastImage
                source={{ uri: loggedinProfile.firstImage }}
                style={styles.profileImageStyle}
              />
            </LinearGradient>

            <LinearGradient
              colors={['#F31B5A', '#F04224']}
              start={{ x: 0.0, y: 0.5 }}
              end={{ x: 1.0, y: 0.2 }}
              style={styles.gradientImage}>
              <FastImage
                source={require('../../../assets/image/image1.png')}
                style={styles.profileImageStyle}
              />
            </LinearGradient>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.textStyle}>{strings.MatchVerifyTitle}</Text>
            <Text style={styles.textStyle1}>{strings.MatchVerifyText}</Text>
          </View>
        </View>
        {loggedinProfile.wealth_status === 'Successful' ? (
          <View style={styles.bottomButton}>
            <GradientTextButton
              text={'Keep swiping'}
              onPress={() => navigation.navigate('Home')}
            />
            <GradientButton
              text={'Write a message'}
              onPress={() => navigation.navigate('UserChatScreen', { id: 62 })}
            />
          </View>
        ) : (
          <View style={styles.bottomButton}>
            <GradientTextButton
              text={'Keep swiping'}
              colors={['#F31B5A', '#F04224']}
            />
            <LinearGradient
              colors={['#F31B5A', '#F04224']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButtonStyle}>
              <Text
                style={styles.buttonTextStyle}
                onPress={() => navigation.navigate('UserChatScreen', { id: 62 })}>
                {' '}
                Write a message{' '}
              </Text>
            </LinearGradient>
          </View>
        )}
      </View>
    </Modal>
  );
};
export default MatchVerifyModal;