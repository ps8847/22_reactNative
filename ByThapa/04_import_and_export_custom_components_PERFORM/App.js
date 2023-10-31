
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/Screens/CustomComponents";

const App = () => {
  return (
  <View>
     <Text style={styles.textStyle}>hello World ,  this is from app</Text>
     <CustomComponent />
  </View>
 )
}


const styles = StyleSheet.create({
  textStyle:{
    color:"red",
    marginTop:100
  }
})

export default App;