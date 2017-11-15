import { TabNavigator } from 'react-navigation'
import LeftScreen from './LeftScreen'
import CenterScreen from './CenterScreen'
import RightScreen from './RightScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

const MainNavigator = TabNavigator({

    Glasses: {
      screen: LeftScreen,
      navigationOptions: {
        tabBarLabel: 'Glasses',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-glasses' : 'ios-glasses-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),}
    },

    Analytics: {
      screen: CenterScreen,
      navigationOptions: {
        tabBarLabel: 'Analyze',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-analytics' : 'ios-analytics-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),}
    },

    Profile: {
      screen: RightScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),}
    }

    },

    {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showLabel: true
    },


});


export default MainNavigator
