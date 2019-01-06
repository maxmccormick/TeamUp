import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, Flatlist } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Random from './screens/Random';
import Smart from './screens/Smart';
import Teams from './screens/Teams';

const RootNavigator = createStackNavigator({
  // the four screens that comprise the app
  Home: Home,
  Random: Random,
  Smart: Smart,
  Teams: Teams,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(74, 160, 236)',
    },
    headerTintColor: 'white'
  }
});

// sets the non app-specific display info at the top of the screen to white-coloured.
StatusBar.setBarStyle('light-content');


export default createAppContainer(RootNavigator);