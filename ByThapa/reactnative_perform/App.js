// * import libraries to create components 
import React from "react";
import { StyleSheet, Text } from "react-native";

// * create a acomponent that return some jsx / simple function 
const App = () => {
  return <Text style={styles.textStyle}>hello World</Text>
}

// * create a stylesheet to style the component 

const styles = StyleSheet.create({
  textStyle:{
    color:"red"
  }
})

// * export the file , so that we can use it elsewhere in our app 
export default App;