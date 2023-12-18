import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialBottomNavigator from './src/MaterialBottomNavigator/MaterialBottomNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MaterialBottomNavigator" component={MaterialBottomNavigator} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;