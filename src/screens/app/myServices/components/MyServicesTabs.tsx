import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../utils/Colors';
import fonts from '../../../../utils/fonts';
import {fontSizes} from '../../../../utils/fontSizes';

export type TabsType = 'self' | 'other';

type Props = {
  selectedTab: TabsType;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabsType>>;
};

/* react functional component */
const MyServicesTabs = ({selectedTab, setSelectedTab}: Props) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        activeOpacity={0.3}
        style={
          selectedTab === 'self' ? [styles.tab, styles.activeTab] : styles.tab
        }
        onPress={() => {
          setSelectedTab('self');
        }}>
        <Text style={styles.tabTxt}>Self</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.3}
        style={
          selectedTab === 'other' ? [styles.tab, styles.activeTab] : styles.tab
        }
        onPress={() => {
          setSelectedTab('other');
        }}>
        <Text style={styles.tabTxt}>Other</Text>
      </TouchableOpacity>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderBottomColor: COLORS.color3,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  tabTxt: {
    fontFamily: fonts.kanitRegular,
    color: COLORS.secondary,
    fontSize: fontSizes.h4,
    textTransform: 'uppercase',
  },
  activeTab: {
    borderBottomColor: COLORS.secondary,
  },
});

export default MyServicesTabs;
