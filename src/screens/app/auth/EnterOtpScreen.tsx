import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {COLORS} from '../../../utils/Colors';
import Home from '../../../assets/svgs/home.svg';
import Otp from '../../../assets/svgs/otp.svg';
import {fontSizes} from '../../../utils/fontSizes';
import fonts from '../../../utils/fonts';
import {AuthStackParams} from '../../../utils/types';
import {height} from '../../../utils/globals';

type Props = NativeStackScreenProps<AuthStackParams, 'otp'>;

/* React functional component */
const EnterOtpScreen = ({route}: Props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.homeIconContainer}>
          <Home width={22} height={22} />
        </View>
        <View style={styles.otpSvg}>
          <Otp />
        </View>

        <View style={styles.otpContainer}>
          <Text style={styles.header}>Enter OTP</Text>
          <Text style={styles.otpTxt}>
            a 6 digit otp has been sent to {route.params.phone}
          </Text>
        </View>

        <View style={styles.loginBtnContainer}>
          <TouchableOpacity style={styles.loginContainer} activeOpacity={0.6}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

/* styles */
const styles = StyleSheet.create({
  container: {flex: 1, height: height, backgroundColor: COLORS.bgColor},
  homeIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  otpSvg: {alignSelf: 'center', marginTop: 50},
  otpContainer: {marginTop: 25, marginHorizontal: 10},
  header: {
    textTransform: 'capitalize',
    color: COLORS.secondary,
    fontSize: fontSizes.splashHeader,
    fontFamily: fonts.kanitSemiBold,
  },
  otpTxt: {
    textTransform: 'capitalize',
    fontFamily: fonts.cabinSemiBold,
    color: COLORS.secondary,
    width: '50%',
  },
  loginBtnContainer: {alignItems: 'center', marginTop: 30},
  login: {
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
    fontFamily: fonts.kanitSemiBold,
  },
  loginContainer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
    alignItems: 'center',
  },
});

export default EnterOtpScreen;
