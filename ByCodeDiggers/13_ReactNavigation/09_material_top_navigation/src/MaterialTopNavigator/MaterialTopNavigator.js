import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopNavigator() {
  return (
    <Tab.Navigator activeColor="black"
    barStyle={{ backgroundColor: 'tomato' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: () => <IconContainer name={'home'} /> , tabBarColor:"red"}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{tabBarIcon: () => <IconContainer name={'settings'} />, tabBarColor:"green"}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarIcon: () => <IconContainer name={'person'} />, tabBarColor:"blue"}}
      />
    </Tab.Navigator>
  );
}

const IconContainer = ({name}) => {
  return <Ionicons name={name} size={20} color={'black'} />;
};
