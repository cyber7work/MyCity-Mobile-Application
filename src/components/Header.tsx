import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Profile from '../assets/svgs/profile.svg';
import Message from '../assets/svgs/messages.svg';
import {COLORS} from '../utils/Colors';
import fonts from '../utils/fonts';
import {AppStackParams} from '../utils/types';

/* react functional component */
const Header = () => {
  const navigation = useNavigation<NavigationProp<AppStackParams>>();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('profile');
          }}>
          <Profile />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageContainer}>
          <Message />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileTxt}>84501</Text>
        <Text style={styles.profileTxt}>Motihari</Text>
      </View>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.color3,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTxt: {color: COLORS.secondary, fontFamily: fonts.cabinSemiBold},
  leftContainer: {flexDirection: 'row', alignItems: 'center'},
  messageContainer: {marginLeft: 15},
  profileInfo: {alignItems: 'center'},
});

export default Header;
