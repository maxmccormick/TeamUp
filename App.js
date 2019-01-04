import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, Flatlist } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Random from './screens/Random';
import Smart from './screens/Smart';
import Teams from './screens/Teams';

const RootNavigator = createStackNavigator({
  Home: Home,
  Random: Random,
  Smart: Smart,
  Teams: Teams,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(74, 160, 236)',
    },
    headerTintColor: 'transparent'
  }
});

StatusBar.setBarStyle('light-content');


export default createAppContainer(RootNavigator);