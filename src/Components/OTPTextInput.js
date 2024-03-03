import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SignupLogin from './Header/SignupLogin';

const OTPTextInput = ({ route }) => {

  const { confirmation } = route.params;

  const [ref1, ref2, ref3, ref4, ref5, ref6] = Array.from({ length: 6 }, () => useRef());
  const [resendTimer, setResendTimer] = useState(60);
  const [OtpSubmit, setOtpSubmit] = useState(true);

  useEffect(() => {
    if (OtpSubmit) {
      const interval = setInterval(() => {
        if (resendTimer == 0) {
          clearInterval(interval);
        }
        else setResendTimer((prev) => prev - 1);

      }, 1000)

      return () => clearInterval(interval)
    }
  }, [resendTimer, OtpSubmit]);

  const [otpFields, setOtpFields] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
  });

  const handleOtpSubmit = async () => {
    try {
      setOtpSubmit(true);
      const OtpVal = `${field1}${field2}${field3}${field4}${field5}${field6}`;
      console.log('OTP: ', OtpVal);
      const res = await confirmation.confirm(OtpVal);
      console.log('VERIFY RESULT:', res);
    }
    catch (error) {
      console.log('VERIFY ERROR: ', error);
    }
  }

  const { field1, field2, field3, field4, field5, field6 } = otpFields;

  return (
    <ImageBackground source={require('../../images/bg1.jpeg')}
      style={{ flex: 1, height: 670 }}>
      <View style={styles.container}>
        <SignupLogin heading={`Confirmation Code`} />
        <View style={styles.otpView}>
          <TextInput style={[styles.inputView, { borderColor: field1 ? '#74B9FF' : '#000000' }]}
            maxLength={1}
            keyboardType='numeric'
            ref={ref1}
            value={field1}
            cursorColor='#000000'
            onChangeText={(text) => {
              setOtpFields({ ...otpFields, field1: text })
              if (text.length == 1) {
                ref2.current.focus();
              }
            }}
          />
          <TextInput style={[styles.inputView, { borderColor: field2 ? '#74B9FF' : '#000000' }]}
            maxLength={1}
            ref={ref2}
            value={field2}
            onChangeText={(text) => {
              setOtpFields({ ...otpFields, field2: text })
              if (text.length == 1) {
                ref3.current.focus();
              }
              else {
                ref1.current.focus();
              }
            }}
            keyboardType='numeric'

          />
          <TextInput style={[styles.inputView, { borderColor: field3 ? '#74B9FF' : '#000000' }]}
            maxLength={1}
            ref={ref3}
            value={field3}
            onChangeText={(text) => {
              setOtpFields({ ...otpFields, field3: text })
              if (text.length == 1) {
                ref4.current.focus();
              }
              else {
                ref2.current.focus();
              }
            }}
            keyboardType='numeric'

          />
          <TextInput style={[styles.inputView, { borderColor: field4 ? '#74B9FF' : '#000000' }]}
            maxLength={1}
            value={field4}
            ref={ref4}
            onChangeText={(text) => {
              setOtpFields({ ...otpFields, field4: text })
              if (text.length == 1) {
                ref5.current.focus();
              }
              else {
                ref3.current.focus();
              }
            }}
            keyboardType='numeric'

          />
          <TextInput style={[styles.inputView, { borderColor: field5 ? '#74B9FF' : '#000000' }]}
            maxLength={1}
            value={field5}
            ref={ref5}
            onChangeText={(text) => {
              setOtpFields({ ...otpFields, field5: text })
              if (text.length == 1) {
                ref6.current.focus();
              }
              else {
                ref4.current.focus();
              }
            }}
            keyboardType='numeric'
          />
          <TextInput style={[styles.inputView, { borderColor: field6 ? '#74B9FF' : '#000000' }]}
            maxLength={1}
            value={field6}
            ref={ref6}
            onChangeText={(text) => {
              setOtpFields({ ...otpFields, field6: text })
              if (text.length < 1) {
                ref5.current.focus();
              }
            }}
            keyboardType='numeric'
          />
        </View>

        {<Text style={styles.resendTimer}>{OtpSubmit && resendTimer > 0 ? `${resendTimer} seconds` : ''}</Text>}
        <View style={{
          flexDirection: 'row', alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={styles.didNotReceiveOtpText}>Didn't receive the OTP?
          </Text>
          <TouchableOpacity onPress={() => setResendTimer(60)}>
            <Text style={[styles.resendOtpText, { color: resendTimer == 0 ? '#0A79DF' : 'gray' }]}> Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.verifyOtpBtn, (field1 && field2 && field3 && field4 && field5 && field6) ? styles.verifyOtpBtn : { backgroundColor: 'gray' }]}
          disabled={!(field1 && field2 && field3 && field4 && field5 && field6)}
          onPress={handleOtpSubmit}
        >
          <Text style={styles.btnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 32
  },
  inputView: {
    width: 30,
    // height: 60,
    fontSize: 19,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderColor: 'blue',
    marginLeft: 12,
    textAlign: 'center',
    color: '#000000'
  },
  verifyOtpBtn: {
    width: '80%',
    height: 55,
    backgroundColor: "#0A79DF",
    // paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 40,
    marginHorizontal: 40
  },
  disabledVerifyOtp: {
    backgroundColor: 'gray'
  },
  btnText: {
    fontSize: 18,
    color: "#fff"
  },
  didNotReceiveOtpText: {
    color: 'gray',
    textAlign: 'center',
  },
  resendTimer: {
    textAlign: 'center',
    marginVertical: 26,
    color: 'gray'
  },
  resendOtpText: {
    textAlign: 'center',
  }
});

export default OTPTextInput;
