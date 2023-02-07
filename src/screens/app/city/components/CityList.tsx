import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/Colors';
import fonts from '../../../../utils/fonts';
import {fontSizes} from '../../../../utils/fontSizes';

const options = [
  'People',
  'City Complaints',
  'Education',
  'Restaurants',
  'Park',
  'Shop',
  'Park',
  'Shop',
  'Park',
  'Shop',
];

/* React functional component */
const CityList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {options.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.optionContainer,
                // eslint-disable-next-line react-native/no-inline-styles
                {marginLeft: index % 2 !== 0 ? 14 : 0},
              ]}
              activeOpacity={0.6}
              key={index.toString()}>
              <Text style={styles.optionsTxt}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

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
  innerContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  optionContainer: {
    width: '48%',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionsTxt: {
    fontFamily: fonts.cabinMedium,
    fontSize: fontSizes.h4,
    color: COLORS.secondary,
    textTransform: 'capitalize',
  },
  bottomContainer: {alignItems: 'flex-end', marginTop: 10},
  viewAllBtn: {
    backgroundColor: COLORS.color3,
    padding: 3,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  viewAllTxt: {color: COLORS.secondary, fontFamily: fonts.cabinSemiBold},
});

export default CityList;
