
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import LoginScreen from '../../screens/Login';
import SignUpScreen from '../../screens/SignUp';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';
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
        name="Login"
        component={LoginScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );

}