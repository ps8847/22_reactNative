
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import Home from "../../screens/Home"
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
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

        /> : null}
      
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );

}