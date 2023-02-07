import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../utils/Colors';
import fonts from '../utils/fonts';
import {fontSizes} from '../utils/fontSizes';

export type SelectedType = 'services' | 'city';

type Props = {
  btnLabel: string;
};

/* React functional component */
const SearchBarWithBtn = ({btnLabel}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.leftInnerContainer} activeOpacity={0.6}>
          <Text style={styles.txt}>{btnLabel}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.searchBarContainer}>
          <IoniconIcon size={16} name="search-outline" color={COLORS.color4} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            selectionColor={COLORS.secondary}
          />
        </View>
      </View>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {flex: 1.2},
  leftInnerContainer: {
    backgroundColor: COLORS.color3,
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
  },
  txt: {
    fontFamily: fonts.kanitSemiBold,
    color: COLORS.secondary,
    fontSize: fontSizes.h5,
    textTransform: 'capitalize',
  },
  rightContainer: {flex: 3, paddingLeft: 20},
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.color3,
    borderRadius: 15,
    paddingHorizontal: 12,
  },
  searchInput: {
    backgroundColor: 'transparent',
    paddingVertical: 2,
    borderRadius: 15,
    fontSize: 15,
    fontFamily: fonts.kanitRegular,
    width: '100%',
  },
});

export default SearchBarWithBtn;
