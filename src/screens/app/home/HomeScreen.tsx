import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import SearchBarWithBtn from '../../../components/SearchBarWithBtn';
import {COLORS} from '../../../utils/Colors';
import fonts from '../../../utils/fonts';
import ServiceList from './components/ServiceList';
// import {AppStackParams} from '../../../utils/types';

// type Props = NativeStackScreenProps<AppStackParams, 'home'>;

/* react functional component */
const HomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <SearchBarWithBtn btnLabel="Services" />
          <ServiceList />
        </View>
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  scrollView: {flexGrow: 1, height: '100%'},
  container: {flex: 1, backgroundColor: COLORS.bgColor, padding: 10},
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
