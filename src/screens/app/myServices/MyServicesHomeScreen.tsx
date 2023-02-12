import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import {COLORS} from '../../../utils/Colors';
import MyServicesHeader from './components/MyServicesHeader';
import NoServices from './components/NoServices';

/* react functional component */
const MyServicesHomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <MyServicesHeader />

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
});

export default MyServicesHomeScreen;
