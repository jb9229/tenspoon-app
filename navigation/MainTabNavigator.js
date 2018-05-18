import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
// import { TabNavigator, TabBarBottom } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DntHistoryScreen from '../screens/DntHistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons
      focused={focused}
      size={28}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'silverware-spoon'
      }
    />
  ),
};

const DntHistoryStack = createStackNavigator({
  DntHis: DntHistoryScreen,
});

DntHistoryStack.navigationOptions = {
  tabBarLabel: 'DntHis',
  tabBarIcon: ({ focused }) => (
    <Entypo
      focused={focused}
      size={28}
      style={{ marginBottom: -3 }}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'bowl'}
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  DntHistoryStack
});
