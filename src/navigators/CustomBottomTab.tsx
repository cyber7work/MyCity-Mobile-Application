import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {COLORS} from '../utils/Colors';
import fonts from '../utils/fonts';
import {fontSizes} from '../utils/fontSizes';

/* react functional component */
const CustomBottomTab = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.raiseComplaintsContainer}
        activeOpacity={0.6}>
        <Text style={styles.raiseComplaints}>Raise</Text>
        <Text style={[styles.raiseComplaints, styles.complaintsTxt]}>
          Complaints
        </Text>
      </TouchableOpacity>
      <View style={styles.bottomView}>
        {state.routes.map((item, index) => {
          let label = 'Home';

          switch (item.name) {
            case 'city':
              label = 'City';
              break;
            case 'myServices':
              label = 'My Services';
              break;
            case 'services':
              label = 'Services';
              break;
            default:
              label = 'Home';
              break;
          }

          const isTabFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.6}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: item.key,
                  canPreventDefault: true,
                });

                if (!isTabFocused && !event.defaultPrevented) {
                  navigation.navigate(item.name);
                }
              }}>
              <Text
                style={{
                  fontFamily: fonts.cabinSemiBold,
                  fontSize: fontSizes.h4,
                  color: isTabFocused ? COLORS.color5 : COLORS.secondary,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.bgColor},
  raiseComplaintsContainer: {
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginBottom: -8,
    zIndex: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  raiseComplaints: {fontFamily: fonts.kanitSemiBold, fontSize: fontSizes.h4},
  complaintsTxt: {marginTop: -5},
  bottomView: {
    backgroundColor: COLORS.color1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
});

export default CustomBottomTab;
