import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialTopNavigator from './src/MaterialTopNavigator/MaterialTopNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MaterialTopNavigator" component={MaterialTopNavigator} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;