import React from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';

const data = [
  {
    img: require('../../../../assets/img/slider/sliderOne.png'),
  },
  {
    img: require('../../../../assets/img/slider/sliderTwo.png'),
  },
  {
    img: require('../../../../assets/img/slider/sliderOne.png'),
  },
];

const CarouselItem = ({item, index}: {item: {img: any}; index: string}) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <Image source={item.img} style={styles.itemImg} />
    </View>
  );
};

/* React functional component */
const Slider = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, idx) => (
          <CarouselItem
            key={idx.toString()}
            index={idx.toString()}
            item={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  container: {marginBottom: 15},
  itemContainer: {marginRight: 5, width: 195},
  itemImg: {resizeMode: 'cover'},
});

export default Slider;
