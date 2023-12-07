import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ContactYoutube from "./src/Screens/ContactYoutube";
import CounterNumber from "./src/Screens/CounterNumber";
import HomeYoutube from "./src/Screens/HomeYoutube";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const App = () => {

  const Stack = createNativeStackNavigator()
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ContactYoutube}/>
        <Stack.Screen name="Home" component={HomeYoutube}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
