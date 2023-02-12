import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import {COLORS} from '../../../utils/Colors';
import fonts from '../../../utils/fonts';
import {fontSizes} from '../../../utils/fontSizes';
import NoServices from './components/NoServices';

/* react functional component */
const MyServicesHomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.headerTxt}>My Services</Text>
          </View>

          <NoServices />
        </View>
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  scrollView: {flexGrow: 1, height: '100%'},
  container: {flex: 1, backgroundColor: COLORS.bgColor, padding: 10},
  headerTxt: {
    textAlign: 'center',
    fontFamily: fonts.kanitSemiBold,
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
  },
});

export default MyServicesHomeScreen;
