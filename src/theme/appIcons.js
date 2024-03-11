import Home from '../assets/svg/house-solid.svg';
import Feather from 'react-native-vector-icons/Feather';

const _iconSet = {};

const _svgIconSet = {
  Home
};

const tabIcons = {
  Home: <Feather name="home" color={'#74B9FF'} size={22} />
}
// const _masks = {
//   ExploreHeaderMask,
//   MatchCharms,
//   MatchWealthy,
// };

// const _imagesSet = {
//   loginSignupBackground: require('../../assets/image/loginSignup.png'),
//   onboardone: require('../../assets/image/onboardone.png'),
//   onboardtwo: require('../../assets/image/onboardtwo.png'),
//   onboardthree: require('../../assets/image/onboardthree.png'),
//   onboardfour: require('../../assets/image/onboardfour.png'),
//   MapIcon: require('../../assets/image/MapIcon.png'),
//   PrivatePhotos: require('../../assets/image/privatephotos.png'),
//   UnlockPrivatePhotos: require('../../assets/image/privatephotos1.png'),
// };

// const appIcons = {
//   IconSet: _iconSet,
//   SvgIcon: _svgIconSet,
//   ImageSet: _imagesSet,
//   Masks: _masks,
//   RedHeartIcon: RedHeartIcon,
//   MoreIcon: MoreIcon,
//   Blueheart: Blueheart,
//   ArchiveSwipeIcon,
//   DeleteSwipeIcon,
//   BlockSwipeIcon,
//   CameraIcon,
//   GalleryIcon,
//   MicIcon,
//   SendIcon,
//   AudioCallIcon,
//   VideoCallIcon,
//   MorehorizontalIcon,
// };

const appIcons = {
  TabIcons: tabIcons
}
export default appIcons;
