import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../../components/Header';
import {COLORS} from '../../../utils/Colors';
import fonts from '../../../utils/fonts';
import CityList from './components/CityList';
import SearchBarWithBtn, {SelectedType} from './components/SearchBarWithBtn';
import ServiceList from './components/ServiceList';

/* react functional component */
const HomeScreen = () => {
  const [selectedType, setSelectedType] = useState<SelectedType>('services');

  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <SearchBarWithBtn
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          {selectedType === 'services' && <ServiceList />}
          {selectedType === 'city' && <CityList />}
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
