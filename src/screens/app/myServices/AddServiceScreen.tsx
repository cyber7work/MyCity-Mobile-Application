import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../../components/Header';
import {COLORS} from '../../../utils/Colors';
import MyServicesHeader from './components/MyServicesHeader';
import MyServicesTabs, {TabsType} from './components/MyServicesTabs';

/* react functional component */
const AddServiceScreen = () => {
  /* State to store selected tab */
  const [selectedTab, setSelectedTab] = useState<TabsType>('self');

  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <MyServicesHeader showBackButton />
          </View>

          <MyServicesTabs
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </View>
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  scrollView: {flexGrow: 1, height: '100%'},
  container: {flex: 1, backgroundColor: COLORS.bgColor},
  headerContainer: {padding: 10},
});

export default AddServiceScreen;
