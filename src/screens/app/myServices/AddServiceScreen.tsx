import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import {COLORS} from '../../../utils/Colors';
import AddSelfServiceTab from './components/AddSelfServiceTab';
import MyServicesHeader from './components/MyServicesHeader';
import MyServicesTabs, {TabsType} from './components/MyServicesTabs';
import OtherSelfServiceTab from './components/OtherSelfServiceTab';

/* react functional component */
const AddServiceScreen = () => {
  /* State to store selected tab */
  const [selectedTab, setSelectedTab] = useState<TabsType>('self');

  return (
    <View style={styles.root}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <MyServicesHeader showBackButton />
          </View>

          <MyServicesTabs
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />

          {selectedTab === 'self' && <AddSelfServiceTab />}
          {selectedTab === 'other' && <OtherSelfServiceTab />}
        </View>
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  root: {flex: 1},
  scrollView: {paddingBottom: 30},
  container: {flex: 1, backgroundColor: COLORS.bgColor},
  headerContainer: {padding: 10},
});

export default AddServiceScreen;
