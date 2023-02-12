import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ProfileCircle from '../../../assets/svgs/profileCircle.svg';
import Back from '../../../assets/svgs/backArrow.svg';
import {COLORS} from '../../../utils/Colors';
import {width} from '../../../utils/globals';
import fonts from '../../../utils/fonts';
import {fontSizes} from '../../../utils/fontSizes';
import {AppStackParams} from '../../../utils/types';

type Props = NativeStackScreenProps<AppStackParams, 'profile'>;

/* react functional component */
const MyProfileScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.bgCircle}>
          <ProfileCircle width={width} />
        </View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('home');
            }}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.profile}>My Profile</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.screenContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImgContainer}>
              <Image
                source={require('../../../assets/img/profile.png')}
                style={styles.profileImg}
              />
            </View>
            <View style={styles.profileDetails}>
              <Text style={styles.profileTxt}>lakshita singh</Text>
              <Text style={styles.mobile}>+918603678862</Text>
              <View style={styles.positionContainer}>
                <Text style={styles.position}>Teacher</Text>
              </View>
            </View>
          </View>

          <View style={styles.optionsContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return (
                <TouchableOpacity
                  key={index.toString()}
                  activeOpacity={0.7}
                  style={styles.optionsItem}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  scrollView: {flexGrow: 1, height: '100%'},
  container: {flex: 1, backgroundColor: COLORS.bgColor},
  header: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  profile: {
    fontFamily: fonts.kanitSemiBold,
    fontSize: fontSizes.h3,
    textAlign: 'center',
    flex: 1,
  },
  bgCircle: {position: 'absolute', top: 0},
  screenContainer: {flex: 1},
  profileContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 65,
    width: 120,
    height: 120,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  profileImg: {resizeMode: 'cover'},
  profileDetails: {flex: 1, paddingLeft: 20},
  profileTxt: {
    textTransform: 'capitalize',
    fontFamily: fonts.cabinMedium,
    fontSize: fontSizes.h3,
    color: COLORS.secondary,
  },
  mobile: {
    fontFamily: fonts.cabinMedium,
    fontSize: fontSizes.h4,
    color: COLORS.secondary,
    marginTop: 2,
  },
  positionContainer: {
    backgroundColor: COLORS.white,
    marginTop: 10,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  position: {
    color: COLORS.secondary,
    fontFamily: fonts.cabinSemiBold,
    fontSize: fontSizes.h4,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
    justifyContent: 'center',
    marginBottom: 15,
  },
  optionsItem: {
    width: 150,
    backgroundColor: COLORS.color1,
    height: 140,
    margin: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default MyProfileScreen;
