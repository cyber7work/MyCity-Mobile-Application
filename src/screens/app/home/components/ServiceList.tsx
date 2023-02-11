import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../utils/Colors';
import Florist from '../../../../assets/svgs/services/florist.svg';
import DryCleaning from '../../../../assets/svgs/services/dryCleaning.svg';
import Hospital from '../../../../assets/svgs/services/hospital.svg';
import Laundry from '../../../../assets/svgs/services/laundry.svg';
import HomeRepairs from '../../../../assets/svgs/services/homeRepairs.svg';
import PestControl from '../../../../assets/svgs/services/pestControl.svg';
import Electric from '../../../../assets/svgs/services/electric.svg';
import Plumber from '../../../../assets/svgs/services/plumber.svg';
import Atm from '../../../../assets/svgs/services/cleaning.svg';
import Cleaning from '../../../../assets/svgs/services/atm.svg';
import fonts from '../../../../utils/fonts';
import {fontSizes} from '../../../../utils/fontSizes';

/* Variable to store services options */
const servicesOptions = [
  {
    cover: <Florist />,
    label: 'local florist',
  },
  {
    cover: <DryCleaning />,
    label: 'dry cleaning',
  },
  {
    cover: <Hospital />,
    label: 'local hospital',
  },
  {
    cover: <Laundry />,
    label: 'local laundry',
  },
  {
    cover: <HomeRepairs />,
    label: 'home repair services',
  },
  {
    cover: <PestControl />,
    label: 'pest control',
  },
  {
    cover: <Electric />,
    label: 'electric services',
  },
  {
    cover: <Plumber />,
    label: 'plumber',
  },
  {
    cover: <Atm />,
    label: 'local atm',
  },
  {
    cover: <Cleaning />,
    label: 'cleaning',
  },
];

/* react functional component */
const ServiceList = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.servicesContainer}>
          {servicesOptions.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.serviceItem}
                key={index.toString()}>
                {item.cover}
                <Text style={styles.servicesLabel}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
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
  bottomContainer: {alignItems: 'flex-end', marginTop: 10},
  viewAllBtn: {
    backgroundColor: COLORS.color3,
    padding: 3,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  viewAllTxt: {color: COLORS.secondary, fontFamily: fonts.cabinSemiBold},
  servicesContainer: {flexDirection: 'row', flexWrap: 'wrap'},
  serviceItem: {width: '25%', alignItems: 'center', marginBottom: 15},
  servicesLabel: {
    textTransform: 'capitalize',
    color: COLORS.secondary,
    fontFamily: fonts.cabinRegular,
    fontSize: fontSizes.h6,
    marginTop: 5,
  },
});

export default ServiceList;
