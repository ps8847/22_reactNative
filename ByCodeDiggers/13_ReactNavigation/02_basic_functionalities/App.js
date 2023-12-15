import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> // by default  */}
        {/* <Stack.Screen name="Home Screen" component={HomeScreen} /> // change  name of path of screen */}
        {/* <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown:false}} /> // hide topbar  */}
        {/* <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerStyle:{
          backgroundColor:'lightblue'
        }}} /> // change header background */}
        {/* <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerTitle:'head title'}} />  */} 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;