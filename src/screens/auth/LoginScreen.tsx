import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {COLORS} from '../../utils/Colors';
import Home from '../../assets/svgs/home.svg';
import Login from '../../assets/svgs/login.svg';
import {fontSizes} from '../../utils/fontSizes';
import fonts from '../../utils/fonts';
import {AuthStackParams} from '../../utils/types';

type Props = NativeStackScreenProps<AuthStackParams, 'login'>;

/* React functional component */
const LoginScreen = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.homeIconContainer}>
          <Home width={22} height={22} />
        </View>
        <View style={styles.loginSvg}>
          <Login />
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.header}>Login</Text>

          <TextInput
            keyboardType="numeric"
            placeholder="+91 Mobile Number"
            style={styles.input}
          />
        </View>

        <View style={styles.continueBtnContainer}>
          <TouchableOpacity
            style={styles.continueContainer}
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('otp', {phone: '+918603678862'});
            }}>
            <Text style={styles.continue}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noticeContainer}>
          <Text
            style={{fontFamily: fonts.cabinSemiBold, fontSize: fontSizes.h4}}>
            Important Notice
          </Text>

          <View style={styles.ul}>
            {[
              'This is to inform all member that it should be not ok',
              'This is to inform all member that it should be not ok',
              'This is to inform all member that it should be not ok',
              'This is to inform all member that it should be not ok',
            ].map((item, index) => {
              return (
                <Text key={index.toString()} style={styles.li}>
                  {index + 1}. {item}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

/* Styles */
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.bgColor},
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
  loginSvg: {alignSelf: 'center', marginTop: 50},
  loginContainer: {marginTop: 25, marginHorizontal: 10},
  header: {
    textTransform: 'capitalize',
    color: COLORS.secondary,
    fontSize: fontSizes.splashHeader,
    fontFamily: fonts.kanitSemiBold,
  },
  continueBtnContainer: {alignItems: 'center', marginTop: 30},
  continue: {
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
    fontFamily: fonts.kanitSemiBold,
  },
  continueContainer: {
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
  noticeContainer: {
    backgroundColor: COLORS.tertiary,
    margin: 10,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingBottom: 20,
  },
  ul: {marginTop: 10},
  li: {marginTop: 4},
  input: {
    borderBottomWidth: 1,
    paddingBottom: 3,
    borderBottomColor: COLORS.color2,
  },
  scrollView: {flexGrow: 1},
});

export default LoginScreen;
