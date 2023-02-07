import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppStackParams, HomeTabsParams} from '../utils/types';
import HomeScreen from '../screens/app/home/HomeScreen';
import CustomBottomTab from './CustomBottomTab';
import CityHomeScreen from '../screens/app/city/CityHomeScreen';
import MyServicesHomeScreen from '../screens/app/myServices/MyServicesHomeScreen';
import ServicesHomeScreen from '../screens/app/services/ServicesHomeScreen';

const Stack = createNativeStackNavigator<AppStackParams>();

const Tab = createBottomTabNavigator<HomeTabsParams>();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="homeScreen"
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <CustomBottomTab key="customBar" {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="homeScreen" component={HomeScreen} />
      <Tab.Screen name="city" component={CityHomeScreen} />
      <Tab.Screen name="myServices" component={MyServicesHomeScreen} />
      <Tab.Screen name="services" component={ServicesHomeScreen} />
    </Tab.Navigator>
  );
};

/* React functional component */
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
