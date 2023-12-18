import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../screens/Home';
import Settings from '../../screens/Settings';
import Profile from '../../screens/Profile';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialBottomNavigator() {
  return (
    <Tab.Navigator activeColor="black"
    barStyle={{ backgroundColor: 'tomato' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: () => <IconContainer name={'home'} /> , tabBarColor:"red"}}
      />
      <Tab.Screen
        name="Setting"
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
