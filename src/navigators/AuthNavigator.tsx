import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/app/SplashScreen';
import LoginScreen from '../screens/app/auth/LoginScreen';
import {AuthStackParams} from '../utils/types';
import EnterOtpScreen from '../screens/app/auth/EnterOtpScreen';

const Stack = createNativeStackNavigator<AuthStackParams>();

/* React functional component */
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="otp" component={EnterOtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
