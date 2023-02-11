import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Home from '../../assets/svgs/home.svg';
import NewUser from '../../assets/svgs/newUser.svg';
import {AuthStackParams} from '../../utils/types';
import {COLORS} from '../../utils/Colors';
import {fontSizes} from '../../utils/fontSizes';
import fonts from '../../utils/fonts';

type Props = NativeStackScreenProps<AuthStackParams, 'register'>;

/* React functional component */
const RegisterScreen = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.homeIconContainer}>
          <Home width={22} height={22} />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.newUserTxt}>New User!</Text>

          <View style={styles.userContainer}>
            <NewUser height={50} />
          </View>
        </View>

        <View style={styles.submitBtnContainer}>
          <TouchableOpacity
            style={styles.submitContainer}
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('register');
            }}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

/* styles */
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
  innerContainer: {alignItems: 'center', marginTop: 50},
  submitBtnContainer: {alignItems: 'center', marginTop: 30},
  submit: {
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
    fontFamily: fonts.kanitSemiBold,
  },
  submitContainer: {
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
  newUserTxt: {
    fontSize: fontSizes.splashHeader,
    fontFamily: fonts.kanitBold,
    color: COLORS.secondary,
  },
  userContainer: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.color3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  scrollView: {flexGrow: 1},
});

export default RegisterScreen;
