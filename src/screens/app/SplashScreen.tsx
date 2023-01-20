import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SplashOne from '../../assets/svgs/splashOne.svg';
import {COLORS} from '../../utils/Colors';
import {fontSizes} from '../../utils/fontSizes';
import {width} from '../../utils/globals';

/* React functional component */
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.bgColor, COLORS.color1, COLORS.bgColor]}
        style={styles.linearGradient}
      />

      <View style={styles.homeIconContainer}>
        <Text>H</Text>
      </View>
      <View style={styles.innerContainer}>
        <View>
          <View style={styles.txtContainer}>
            <Text style={styles.header}>My city</Text>
            <Text style={styles.header}>Application</Text>
            <Text style={styles.discover}>Discover Your City</Text>
          </View>
          <View style={styles.splashSvgContainer}>
            <SplashOne />
          </View>
        </View>
        <View style={styles.exploreBtnContainer}>
          <TouchableOpacity style={styles.exploreContainer} activeOpacity={0.6}>
            <Text style={styles.explore}>Let's Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

/* Styles */
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.bgColor},
  innerContainer: {flex: 1, justifyContent: 'space-evenly'},
  homeIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  txtContainer: {marginHorizontal: 12, marginBottom: 25},
  splashSvgContainer: {alignSelf: 'center'},
  exploreBtnContainer: {alignItems: 'center'},
  header: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: COLORS.secondary,
    fontSize: fontSizes.splashHeader,
  },
  discover: {fontSize: fontSizes.h3, marginTop: 3, marginBottom: 10},
  explore: {fontSize: fontSizes.h2, fontWeight: '500', color: COLORS.secondary},
  exploreContainer: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
    alignItems: 'center',
  },
  linearGradient: {
    width: width,
    height: width,
    borderRadius: width / 2,
    position: 'absolute',
    top: -width / 2,
    left: -width / 2,
  },
});

export default SplashScreen;
