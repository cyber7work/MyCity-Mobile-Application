import React, {useRef, useState} from 'react';
import {View, TextInput, StyleSheet, Platform, Keyboard} from 'react-native';
import {COLORS} from '../utils/Colors';

const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    // borderRadius: 5,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    paddingVertical: 12,
    color: COLORS.secondary,
  },
});

const OtpComponent = (props: {
  otpValue: Array<string>;
  updateOtpValue: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const {otpValue, updateOtpValue} = props;

  /* State to check whether text input is focused or not */
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);

  // refs for auto focusing
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);
  const sixthTextInputRef = useRef(null);

  const refsArray = [
    firstTextInputRef,
    secondTextInputRef,
    thirdTextInputRef,
    fourthTextInputRef,
    fifthTextInputRef,
    sixthTextInputRef,
  ];

  /* Set Ref to next input in otp input */
  const setNextRef = textInputRef => node => {
    textInputRef.current = node;
  };

  /* Function to handle when keypad key pressed */
  const onOtpKeyPress = index => {
    return ({nativeEvent: {key: value}}) => {
      if (value === 'Backspace' && otpValue[index] === '') {
        if (index >= 1 && index <= 5) {
          refsArray[index - 1].current.focus();
        }
        if (isAndroid && index > 0) {
          const otpValueCopy = otpValue.concat();
          otpValueCopy[index - 1] = '';
          updateOtpValue(otpValueCopy);
        }
      }
    };
  };

  /* Function to handle values when user enter values in otp input */
  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        return;
      }
      const otpValueCopy = otpValue.concat();
      otpValueCopy[index] = value;
      updateOtpValue(otpValueCopy);

      if (value !== '') {
        if (index >= 0 && index <= 4) {
          refsArray[index + 1].current.focus();
        }
        if (index === 5) {
          Keyboard.dismiss();
        }
      }
    };
  };

  return (
    <View style={styles.container}>
      {refsArray.map((textInputRef, index) => (
        <TextInput
          key={index.toString()}
          style={{
            ...styles.input,
            borderBottomWidth: 1,
            borderBottomColor: '#00000060',
          }}
          value={otpValue[index]}
          keyboardType="numeric"
          selectionColor={COLORS.color1}
          onKeyPress={onOtpKeyPress(index)}
          onChangeText={onOtpChange(index)}
          ref={setNextRef(textInputRef)}
          maxLength={1}
          onFocus={() => {
            setIsTextInputFocused(true);
          }}
          onBlur={() => {
            setIsTextInputFocused(false);
          }}
        />
      ))}
    </View>
  );
};

export default OtpComponent;
