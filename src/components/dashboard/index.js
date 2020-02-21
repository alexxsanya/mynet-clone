import React, { Component } from 'react';
import { Text, StyleSheet, Button} from 'react-native';
import {  createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { View } from 'native-base';

import HomeScreen from './home'
import FreebieScreen from './freebies'
import BundleScreen from './bundles'
 
class Dashboard extends Component {
  render (){
    return(
      <DashboardContainer />
    )
  }
}

const DashboardTabNavigator = createBottomTabNavigator({
  FreebieScreen,
  HomeScreen,
  BundleScreen
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    };
  }
})

const DashboardContainer = createAppContainer (DashboardTabNavigator)

export default Dashboard;