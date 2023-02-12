import React from 'react';
import {View, StyleSheet} from 'react-native';
import NoServicesSvg from '../../../../assets/svgs/noServices.svg';
import NoServicesTxtSvg from '../../../../assets/svgs/noServicesTxt.svg';

/* react functional component */
const NoServices = () => {
  return (
    <View style={styles.container}>
      <NoServicesSvg />
      <NoServicesTxtSvg style={styles.txt} />
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', marginTop: 75},
  txt: {marginTop: 15},
});

export default NoServices;
