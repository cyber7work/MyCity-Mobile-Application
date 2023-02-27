import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS} from '../../utils/Colors';
import fonts from '../../utils/fonts';
import {fontSizes} from '../../utils/fontSizes';
import {width} from '../../utils/globals';
import SplashOne from '../../assets/svgs/splashOne.svg';
import SplashTwo from '../../assets/svgs/splashTwo.svg';
import SplashThree from '../../assets/svgs/splashThree.svg';
import SplashFour from '../../assets/svgs/splashFour.svg';
import SplashFive from '../../assets/svgs/splashFive.svg';
import Home from '../../assets/svgs/home.svg';
import {AuthStackParams} from '../../utils/types';

type Props = NativeStackScreenProps<AuthStackParams, 'splash'>;

const CarouselItem = ({
  item,
  index,
}: {
  item: {title: string; subtitle: string; body: string; img: JSX.Element};
  index: React.Key;
}) => {
  return (
    <View key={index}>
      <View style={styles.txtContainer}>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={[styles.header, styles.application]}>{item.subtitle}</Text>
        <Text style={styles.discover}>{item.body}</Text>
      </View>
      <View style={styles.splashSvgContainer}>{item.img}</View>
    </View>
  );
};

const data = [
  {
    title: 'My city',
    subtitle: 'Application',
    body: 'Discover Your City',
    img: <SplashOne />,
  },
  {
    title: 'stay connected with',
    subtitle: 'your neighbour',
    body: 'know about what’s going on in your city',
    img: <SplashTwo />,
  },
  {
    title: 'resolve you',
    subtitle: 'complaints quickly',
    body: 'raise complaints, get service requests resolved',
    img: <SplashThree />,
  },
  {
    title: 'find nearby park,',
    subtitle: 'restaurents & shops',
    body: 'get to know about your nearby places where you get better deals',
    img: <SplashFour />,
  },
  {
    title: 'Lorem ipsum dolor',
    subtitle: 'sit amet',
    body: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin sed.',
    img: <SplashFive />,
  },
];

/* React functional component */
const SplashScreen = ({navigation}: Props) => {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.bgColor, COLORS.color1, COLORS.bgColor]}
        style={styles.linearGradient}
      />

      <View style={styles.homeIconContainer}>
        <Home width={22} height={22} />
      </View>
      <View style={styles.innerContainer}>
        <View>
          <Carousel
            ref={isCarousel}
            data={data}
            renderItem={CarouselItem}
            sliderWidth={width}
            itemWidth={width}
            inactiveSlideShift={0}
            onSnapToItem={idx => {
              setIndex(idx);
            }}
          />

          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            dotStyle={styles.dotStyle}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>

        <View style={styles.exploreBtnContainer}>
          <TouchableOpacity
            style={styles.exploreContainer}
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('login');
            }}>
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
  exploreBtnContainer: {alignItems: 'center', marginBottom: 25},
  header: {
    textTransform: 'capitalize',
    color: COLORS.secondary,
    fontSize: fontSizes.splashHeader,
    fontFamily: fonts.kanitSemiBold,
  },
  application: {marginTop: -5},
  discover: {
    fontSize: fontSizes.h3,
    marginBottom: 10,
    fontFamily: fonts.cabinRegular,
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
  explore: {
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
    fontFamily: fonts.kanitSemiBold,
  },
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
  scrollView: {flexGrow: 1},
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});

export default SplashScreen;
