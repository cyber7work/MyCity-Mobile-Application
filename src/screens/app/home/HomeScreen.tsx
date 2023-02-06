import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../utils/Colors';
import fonts from '../../../utils/fonts';
import HomeHeader from '../../../components/HomeHeader';

/* react functional component */
const HomeScreen = () => {
  return (
    <View>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  scrollView: {flexGrow: 1},
  container: {flex: 1, backgroundColor: COLORS.bgColor},
  headerContainer: {
    backgroundColor: COLORS.color3,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTxt: {color: COLORS.secondary, fontFamily: fonts.cabinSemiBold},
});

export default HomeScreen;
