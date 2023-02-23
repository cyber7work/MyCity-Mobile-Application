import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {COLORS} from '../../utils/Colors';
import Home from '../../assets/svgs/home.svg';
import Login from '../../assets/svgs/login.svg';
import {fontSizes} from '../../utils/fontSizes';
import fonts from '../../utils/fonts';
import {AuthStackParams} from '../../utils/types';
import {useSubmit} from '../../apis/client';
import {auth} from '../../apis/api';
import {logger} from '../../utils/helpers';
import {errorStyle} from '../../utils/styles';

type Props = NativeStackScreenProps<AuthStackParams, 'login'>;

const schema = yup.object().shape({
  mobile_number: yup.string().required('Please enter mobile and try again'),
});

/* React functional component */
const LoginScreen = ({navigation}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: {errors},
    control,
    reset,
  } = useForm<{mobile_number: string}>({
    defaultValues: {
      mobile_number: '',
    },
    resolver: yupResolver(schema),
  });

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

          <Controller
            name="mobile_number"
            control={control}
            render={({field: {onChange, value}}) => {
              return (
                <TextInput
                  keyboardType="numeric"
                  placeholder="+91 Mobile Number"
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  maxLength={10}
                />
              );
            }}
          />
          {errors.mobile_number && (
            <Text style={errorStyle}>{errors.mobile_number.message}</Text>
          )}
        </View>

        <View style={styles.continueBtnContainer}>
          <TouchableOpacity
            disabled={loading}
            style={styles.continueContainer}
            activeOpacity={0.6}
            onPress={handleSubmit(formData => {
              setLoading(true);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useSubmit(auth.SEND_OTP, formData)
                .then(() => {
                  setLoading(false);
                  navigation.navigate('otp', {phone: formData.mobile_number});
                  reset();
                })
                .catch(err => {
                  logger(err);
                  setLoading(false);
                });
            })}>
            {loading ? (
              <ActivityIndicator color={COLORS.secondary} />
            ) : (
              <Text style={styles.continue}>Continue</Text>
            )}
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
