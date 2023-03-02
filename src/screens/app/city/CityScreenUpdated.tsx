import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import SearchBarWithBtn from '../../../components/SearchBarWithBtn';
import {COLORS} from '../../../utils/Colors';
import CityHeader from './components/CityHeader';
import Slider from './components/Slider';

/* react functional component */
const CityScreenUpdated = () => {
  return (
    <View>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <CityHeader />
          <Slider />
          <SearchBarWithBtn btnLabel="City" showLabel={false} />
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

export default CityScreenUpdated;
