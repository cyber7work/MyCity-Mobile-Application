import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import SearchBarWithBtn from '../../../components/SearchBarWithBtn';
import {COLORS} from '../../../utils/Colors';
import CityList from './components/CityList';

/* react functional component */
const CityHomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <SearchBarWithBtn btnLabel="City" />
          <CityList />
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

export default CityHomeScreen;
