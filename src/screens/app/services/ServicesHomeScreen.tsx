import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../../components/Header';
import {COLORS} from '../../../utils/Colors';
import fonts from '../../../utils/fonts';
import {fontSizes} from '../../../utils/fontSizes';
import Delete from '../../../assets/svgs/delete.svg';
import Edit from '../../../assets/svgs/edit.svg';
import Rectangle from '../../../assets/svgs/rectangle.svg';

const servicesList = [
  {
    name: 'lakshita singh',
    designation: 'teacher',
    img: require('../../../assets/img/profile.png'),
    type: 'self',
  },
  {
    name: 'ujjwala kumari',
    designation: 'beautician',
    img: require('../../../assets/img/profile.png'),
    type: 'other',
  },
  {
    name: 'krishna murari',
    designation: 'electrician',
    img: require('../../../assets/img/profile.png'),
    type: 'other',
  },
  {
    name: 'joe desouza',
    designation: 'cleaner',
    img: require('../../../assets/img/profile.png'),
    type: 'self',
  },
];

/* react functional component */
const ServicesHomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.headerTxt}>Services</Text>
          </View>

          <View style={styles.listContainer}>
            {servicesList.map((item, index) => {
              return (
                <View key={index.toString()} style={styles.listItem}>
                  <View style={styles.profileContainer}>
                    <View style={styles.rectangle}>
                      <Rectangle width={150} height={150} />
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.editIconContainer}>
                      <Edit width={14} height={14} />
                    </TouchableOpacity>
                    <View style={styles.profileImgContainer}>
                      <Image source={item.img} style={styles.profileImg} />
                    </View>
                  </View>
                  <View style={styles.profileDetails}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.deleteIconContainer}>
                      <Delete width={12} height={12} />
                    </TouchableOpacity>
                    <Text style={styles.profileName}>{item.name}</Text>
                    <Text style={styles.designation}>{item.designation}</Text>
                  </View>

                  <View style={styles.typeContainer}>
                    <Text style={styles.typeTxt}>{item.type}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  scrollView: {flexGrow: 1, height: '100%'},
  container: {flex: 1, backgroundColor: COLORS.bgColor, padding: 10},
  headerTxt: {
    textAlign: 'center',
    fontFamily: fonts.kanitSemiBold,
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
  },
  listContainer: {marginTop: 20},
  listItem: {
    backgroundColor: COLORS.white,
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    height: 90,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileContainer: {padding: 10, paddingLeft: 30},
  profileImgContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  profileImg: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  profileDetails: {padding: 10, justifyContent: 'center', flex: 1},
  profileName: {
    fontFamily: fonts.cabinSemiBold,
    fontSize: fontSizes.h4,
    textTransform: 'capitalize',
    color: COLORS.secondary,
  },
  designation: {
    fontFamily: fonts.cabinRegular,
    fontSize: fontSizes.h5,
    textTransform: 'capitalize',
    color: COLORS.secondary,
    marginTop: 2,
  },
  typeContainer: {
    width: 90,
    height: 25,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    transform: [{rotate: '90deg'}],
    position: 'absolute',
    right: -32,
  },
  typeTxt: {
    color: COLORS.secondary,
    fontSize: fontSizes.h5,
    textTransform: 'capitalize',
    fontFamily: fonts.cabinRegular,
  },
  deleteIconContainer: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    right: 35,
    top: 5,
    width: 24,
    height: 24,
    borderRadius: 15,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconContainer: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    left: 5,
    top: 5,
    width: 24,
    height: 24,
    borderRadius: 15,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {position: 'absolute', left: -5, top: -33},
});

export default ServicesHomeScreen;
