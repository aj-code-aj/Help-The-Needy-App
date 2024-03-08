import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, StyleSheet } from 'react-native';
import SignupLogin from '../../../Components/Header/SignupLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneTextInput from '../../../Components/PhoneTextInput';
import auth from '@react-native-firebase/auth';
import SmsRetriever from 'react-native-sms-retriever';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next';

const LoginSignUpMain = ({ navigation }) => {

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpConfirm, setOtpConfirmation] = useState('');
  const PROFILE_IMAGE_SIZE = 150;

  useEffect(() => {
    const configureGoogleSignIn = async () => {
      await GoogleSignin.configure({
        webClientId: '893485539781-6rc3u1g369n4dkdauvu8evgibk965ne2.apps.googleusercontent.com',
        offlineAccess: false,
        profileImageSize: PROFILE_IMAGE_SIZE,
      });
      await getCurrentUser();
    };
    configureGoogleSignIn();
  }, []);

  loginWithFacebook = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        console.log('LOGIN FB: ', login);
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            console.log('ACCESS TOKEN FB: ', accessToken);
            getCurrentProfile();
            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            console.log('FIREBASE FB CREDENTIAL: ', facebookCredential);
            // Sign-in the user with the credential
            return auth().signInWithCredential(facebookCredential);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const getCurrentProfile = async () => {
    try {
      const currentProfile = await Profile.getCurrentProfile();
      if (currentProfile) {
        console.log("The current logged user is: " + JSON.stringify(currentProfile));
      }
    }
    catch (error) {
      console.log('ERROR GETING PROFILE FB: ',);
    }
  }

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      console.log('SIGNIN USER INFO:', user);
      const { idToken } = user;

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('GOOGLE CREDENTIAL: ', googleCredential);

      // Sign-in the user with the credential
      const SignIn = auth().signInWithCredential(googleCredential);
      console.log('SIGNEDIN: ', SignIn);
      return SignIn;
      // setError(undefined);
    } catch (error) {
      const typedError = error;

      switch (typedError.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          Alert.alert('Cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          Alert.alert('In progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert('Play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', typedError.toString());
        // setError(typedError);
      }
    }
  };

  const getCurrentUser = async () => {
    try {
      const user = await GoogleSignin.signInSilently();
      console.log('GOOGLE USER INFO: ', user);
      // setError(undefined);
    } catch (error) {
      const typedError = error;
      if (typedError.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log(new Error('User not signed in yet, please sign in :)'));
      } else {
        console.log('TYPED ERROR', typedError);
      }
    }
  };

  onPhoneNumberPressed = async () => {
    try {
      const phoneNumber = await SmsRetriever.requestPhoneNumber();
      let lastTenChars = phoneNumber.slice(-10);
      setPhone(lastTenChars);
      onSmsListenerPressed();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  // // Get the SMS message (second gif)
  onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      console.log('INSIDE onSmsListenerPressed: ', registered);
      if (registered) {
        SmsRetriever.addSmsListener(event => {
          console.log('SMS Listener Event:', event);
          if (event && event.message) {
            console.log('Received SMS Message:', event.message);
          } else {
            console.log('Received SMS Event, but no message found.');
          }
          SmsRetriever.removeSmsListener();
        });
      } else {
        console.log('Failed to register SMS listener.');
      }
    } catch (error) {
      console.log('Error in onSmsListenerPressed:', error);
    }
  };

  async function signIn() {
    try {
      // auth().settings.appVerificationDisabledForTesting = true;
      console.log('Final Num', phone);
      const confirmation = await auth().signInWithPhoneNumber(`+91 ${phone}`);
      navigation.navigate('OTPTextInput', { confirmation: confirmation, signIn: signIn });
      console.log('MESAGE SENT: ', confirmation);
    } catch (error) {
      console.log(error.message);
    }
  }

  const isNumValid = () => ((/^[0-9]+$/.test(phone)) && (phone.length) == 10)

  const handleSubmitPhone = () => {

    if (isNumValid()) {
      console.log('PHONE IS NUMERIC');
      setLoading(true);
      signIn();
    }
    else {
      console.warn('NUMBER INCORRECT');
      Alert.alert('Mobile Number is Invalid !');
    }
  }

  const handlePhoneText = (num) => {
    console.log('NUM: ', num);
    setPhone(num);
  }

  return (

    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground source={require('../../../../images/bg1.jpeg')}
        style={{ flex: 1, height: 670, }}>
        <SignupLogin heading={`Create an account\n or sign in`} />
        <PhoneTextInput
          onChangeNumber={handlePhoneText}
          phone={phone}
          onSubmit={handleSubmitPhone}
          onInputPressed={onPhoneNumberPressed}
          onGoogleButtonPressed={signInWithGoogle}
          onFacebookButtonPress={loginWithFacebook}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  mainContainer: { flex: 1, backgroundColor: '#ffffff' },

})

export default LoginSignUpMain;