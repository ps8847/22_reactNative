import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>  
    {/* // <Drawer.Navigator initialRouteName='Profile'>  // can give default screen name  */}
    <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon: () => (
            <Ionicons name="home" size={20}/>
          ),
        }}/>
    <Drawer.Screen name="Setting" component={Settings} options={{
          drawerIcon: () => (
            <Ionicons name="settings" size={20}/>
          ),
        }}/>
    <Drawer.Screen name="Profile" component={Profile} options={{
          drawerIcon: () => (
            <Ionicons name="person" size={20}/>
          ),
        }}/>
  </Drawer.Navigator>
  )
}
