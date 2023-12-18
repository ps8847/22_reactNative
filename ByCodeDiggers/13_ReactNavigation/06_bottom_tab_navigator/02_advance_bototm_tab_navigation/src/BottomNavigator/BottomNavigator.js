import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
console.log("Ionicons " , Ionicons);
export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={20}/>
          ),
        }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: () => (
            <Ionicons name="settings" size={20}/>
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={20}/>
          ),
        }}/>
    </Tab.Navigator>
  )
}
