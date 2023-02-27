import React, {useRef, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {width} from '../../../../utils/globals';

const data = [
  {
    img: require('../../../../assets/img/slider/sliderOne.png'),
  },
  {
    img: require('../../../../assets/img/slider/sliderTwo.png'),
  },
  {
    img: require('../../../../assets/img/slider/sliderThree.png'),
  },
  {
    img: require('../../../../assets/img/slider/sliderFour.png'),
  },
];

const CarouselItem = ({item, index}: {item: {img: any}; index: React.Key}) => {
  return (
    <View key={index}>
      <Image source={item.img} />
      <Text>asdasd</Text>
    </View>
  );
};

/* React functional component */
const Slider = () => {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  return (
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
        autoplay
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});

export default Slider;
