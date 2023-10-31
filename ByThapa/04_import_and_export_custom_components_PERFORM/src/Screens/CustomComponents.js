
import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomComponent = () => {
  return <Text style={styles.textStyle}>hello World ,  this is from custokm component</Text>
}


const styles = StyleSheet.create({
  textStyle:{
    color:"red"
  }
})

export default CustomComponent;