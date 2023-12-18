import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialBottomNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: () => <IconContainer name={'home'} />}}
      />
      <Tab.Screen
        name="Setting"
        component={Settings}
        options={{tabBarIcon: () => <IconContainer name={'settings'} />}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarIcon: () => <IconContainer name={'person'} />}}
      />
    </Tab.Navigator>
  );
}

const IconContainer = ({name}) => {
  return <Ionicons name={name} size={20} color={'black'} />;
};
