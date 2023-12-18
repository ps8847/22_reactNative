import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './src/BottomNavigator/BottomNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;