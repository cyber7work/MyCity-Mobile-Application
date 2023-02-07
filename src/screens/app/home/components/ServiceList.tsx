import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../utils/Colors';
import fonts from '../../../../utils/fonts';

/* react functional component */
const ServiceList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllTxt}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  container: {marginTop: 25},
  bottomContainer: {alignItems: 'flex-end', marginTop: 10},
  viewAllBtn: {
    backgroundColor: COLORS.color3,
    padding: 3,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  viewAllTxt: {color: COLORS.secondary, fontFamily: fonts.cabinSemiBold},
});

export default ServiceList;
