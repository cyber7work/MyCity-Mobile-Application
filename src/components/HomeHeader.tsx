import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import Profile from '../assets/svgs/profile.svg';
import Message from '../assets/svgs/messages.svg';
import {COLORS} from '../utils/Colors';
import fonts from '../utils/fonts';

/* react functional component */
const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <Profile />
        <View style={styles.messageContainer}>
          <Message />
        </View>
      </View>
      <View>
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
  messageContainer: {marginLeft: 10},
});

export default HomeHeader;
