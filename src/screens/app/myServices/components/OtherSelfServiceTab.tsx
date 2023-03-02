import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../../../utils/Colors';
import fonts from '../../../../utils/fonts';
import {fontSizes} from '../../../../utils/fontSizes';
import {errorStyle} from '../../../../utils/styles';

/* form type */
type FormType = {
  providerName: string;
  serviceName: string;
  area: string;
  mobile: string;
  pinCode: string;
  type: string;
};

/* react functional component */
const OtherSelfServiceTab = () => {
  /* useForm declaration */
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormType>({
    defaultValues: {
      providerName: '',
      serviceName: '',
      area: '',
      mobile: '',
      pinCode: '',
      type: '',
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>
          Provider Name <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          name="providerName"
          render={({field: {value, onChange}}) => {
            return (
              <TextInput
                placeholder="e.g Teacher"
                value={value}
                onChangeText={onChange}
                style={styles.inputStyle}
              />
            );
          }}
        />
        {errors.providerName && errors.providerName.message ? (
          <Text style={errorStyle}>{errors.providerName.message}</Text>
        ) : null}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>
          Service Name <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          name="serviceName"
          render={({field: {value, onChange}}) => {
            return (
              <TextInput
                placeholder="e.g Aggarwa"
                value={value}
                onChangeText={onChange}
                style={styles.inputStyle}
              />
            );
          }}
        />
        {errors.serviceName && errors.serviceName.message ? (
          <Text style={errorStyle}>{errors.serviceName.message}</Text>
        ) : null}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>
          Area Covered <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          name="area"
          render={({field: {value, onChange}}) => {
            return (
              <TextInput
                placeholder="e.g Aggarwa"
                value={value}
                onChangeText={onChange}
                style={styles.inputStyle}
              />
            );
          }}
        />
        {errors.area && errors.area.message ? (
          <Text style={errorStyle}>{errors.area.message}</Text>
        ) : null}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>
          Mobile Number <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          name="mobile"
          render={({field: {value, onChange}}) => {
            return (
              <TextInput
                placeholder="e.g Aggarwa"
                value={value}
                onChangeText={onChange}
                style={styles.inputStyle}
              />
            );
          }}
        />
        {errors.mobile && errors.mobile.message ? (
          <Text style={errorStyle}>{errors.mobile.message}</Text>
        ) : null}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>
          Pin-Code <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          name="pinCode"
          render={({field: {value, onChange}}) => {
            return (
              <TextInput
                placeholder="e.g Aggarwa"
                value={value}
                onChangeText={onChange}
                style={styles.inputStyle}
              />
            );
          }}
        />
        {errors.pinCode && errors.pinCode.message ? (
          <Text style={errorStyle}>{errors.pinCode.message}</Text>
        ) : null}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>
          Service Type <Text style={styles.required}>*</Text>
        </Text>
        <Controller
          control={control}
          name="type"
          render={({field: {value, onChange}}) => {
            return (
              <TextInput
                placeholder="e.g Aggarwa"
                value={value}
                onChangeText={onChange}
                style={styles.inputStyle}
              />
            );
          }}
        />
        {errors.type && errors.type.message ? (
          <Text style={errorStyle}>{errors.type.message}</Text>
        ) : null}
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.addServiceBtn}
          onPress={handleSubmit(formData => {
            console.log(formData);
          })}>
          <Text style={styles.btnTxt}>Add Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* styles */
const styles = StyleSheet.create({
  container: {marginHorizontal: 10, marginTop: 20},
  inputStyle: {
    backgroundColor: COLORS.color3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 4,
  },
  label: {
    color: COLORS.secondary,
    fontSize: fontSizes.h5,
    fontFamily: fonts.cabinSemiBold,
  },
  required: {color: 'red'},
  formField: {marginTop: 15},
  addServiceBtn: {
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
  btnTxt: {
    fontSize: fontSizes.h2,
    color: COLORS.secondary,
    fontFamily: fonts.kanitSemiBold,
  },
  btnContainer: {alignItems: 'center', marginTop: 40},
});

export default OtherSelfServiceTab;
