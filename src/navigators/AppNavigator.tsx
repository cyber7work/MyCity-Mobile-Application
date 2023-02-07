import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppStackParams, HomeTabsParams} from '../utils/types';
import HomeScreen from '../screens/app/home/HomeScreen';
import {COLORS} from '../utils/Colors';

const Stack = createNativeStackNavigator<AppStackParams>();

const Tab = createBottomTabNavigator<HomeTabsParams>();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: COLORS.color1},
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        name="homeScreen"
        options={{tabBarLabel: 'Home'}}
        component={HomeScreen}
      />
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
