import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialBottomNavigator from './src/MaterialBottomNavigator/MaterialBottomNavigator';
import SplashScreen from "./src/screens/SplashScreen"
import { useState } from 'react';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

function App() {

  let [showSplashScreen , setshowSplashScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false)
    }, 3000);
  } , [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {showSplashScreen ? 
        <Stack.Screen 
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}

        /> : <Stack.Screen
        name="MaterialBottomNavigator"
        component={MaterialBottomNavigator}
        options={{headerShown: false}}
      />}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
