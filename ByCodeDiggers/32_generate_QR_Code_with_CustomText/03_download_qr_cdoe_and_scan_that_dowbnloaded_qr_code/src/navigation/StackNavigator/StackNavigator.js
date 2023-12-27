import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens import
import SplashScreen from '../../screens/SplashScreen';
import Home from '../../screens/Home'
import Scanner from '../../screens/Scanner';
import Generator from '../../screens/Generator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
     
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScannerScreen"
          component={Scanner}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="GeneratorScreen"
          component={Generator}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
