
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/Screens/CustomComponents";

const App = () => {

  const myName = "Prince sharma";
  const myElement = <Text> hello wolrd im the variable</Text>

  const getfullName = (firstName , secondName) => {
    return `My Name ${firstName} ${secondName}`
  }
  return (
  <View>
     <Text style={styles.textStyle}>hello World ,  this is {myName}</Text>
     <CustomComponent />
     {myElement}
     <Text>Hii , {getfullName("prince" , "sharma")}</Text>
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