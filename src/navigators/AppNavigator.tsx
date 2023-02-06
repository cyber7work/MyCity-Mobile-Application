import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParams} from '../utils/types';
import HomeScreen from '../screens/app/home/HomeScreen';

const Stack = createNativeStackNavigator<AppStackParams>();

/* React functional component */
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
