import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../utils/Colors';
import fonts from '../../../../utils/fonts';
import {fontSizes} from '../../../../utils/fontSizes';
import Back from '../../../../assets/svgs/backArrow.svg';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MyServicesStackParams} from '../../../../utils/types';

type Props = {
  showBackButton?: boolean;
};

/* react functional component */
const MyServicesHeader = ({showBackButton = false}: Props) => {
  /* useNavigation prop */
  const navigation = useNavigation<NavigationProp<MyServicesStackParams>>();

  return (
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('homeServices');
          }}>
          <Back />
        </TouchableOpacity>
      ) : null}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>My Services</Text>
      </View>
      {showBackButton && <View style={styles.rightContainer} />}
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgColor,
  },
  headerTxt: {
    textAlign: 'center',
    fontFamily: fonts.kanitSemiBold,
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
  },
  headerContainer: {flex: 1},
  rightContainer: {width: 18},
});

export default MyServicesHeader;
