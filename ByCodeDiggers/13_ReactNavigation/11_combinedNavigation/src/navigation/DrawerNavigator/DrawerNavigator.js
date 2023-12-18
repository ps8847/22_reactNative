import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import MaterialBottomNavigator from '../MaterialBottomNavigator/MaterialBottomNavigator';
import { Text, View } from 'react-native';

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeContainer" component={MaterialBottomNavigator} />
      <Drawer.Screen name="More" component={() => {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>This is More Page</Text>
            </View>
        )
      }} />
    </Drawer.Navigator>
  );
}

export default MyDrawer