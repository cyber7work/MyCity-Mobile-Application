import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AppStackParams,
  HomeTabsParams,
  MyServicesStackParams,
} from '../utils/types';
import HomeScreen from '../screens/app/home/HomeScreen';
import CustomBottomTab from './CustomBottomTab';
// import CityHomeScreen from '../screens/app/city/CityHomeScreen';
import CityScreenUpdated from '../screens/app/city/CityScreenUpdated';
import MyServicesHomeScreen from '../screens/app/myServices/MyServicesHomeScreen';
import ServicesHomeScreen from '../screens/app/services/ServicesHomeScreen';
import MyProfileScreen from '../screens/app/profile/MyProfileScreen';
import AddServiceScreen from '../screens/app/myServices/AddServiceScreen';

const Stack = createNativeStackNavigator<AppStackParams>();
const MyServicesStack = createNativeStackNavigator<MyServicesStackParams>();

const Tab = createBottomTabNavigator<HomeTabsParams>();

const MyServicesStackNavigator = () => {
  return (
    <MyServicesStack.Navigator
      initialRouteName="homeServices"
      screenOptions={{headerShown: false}}>
      <MyServicesStack.Screen
        name="homeServices"
        component={MyServicesHomeScreen}
      />
      <MyServicesStack.Screen name="addService" component={AddServiceScreen} />
    </MyServicesStack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="homeScreen"
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <CustomBottomTab key="customBar" {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="homeScreen" component={HomeScreen} />
      <Tab.Screen name="city" component={CityScreenUpdated} />
      <Tab.Screen name="myServices" component={MyServicesStackNavigator} />
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
      <Stack.Screen name="profile" component={MyProfileScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
