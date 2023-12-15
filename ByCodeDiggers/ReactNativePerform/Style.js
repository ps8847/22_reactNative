import { StyleSheet } from "react-native";

const customStyle = StyleSheet.create({
    mainContainer:{
      flex:1,
      backgroundColor:"red",
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
      color:"#fff"
    },
    shape:{
      height:150,
      width:150,
      backgroundColor:"white",
      borderRadius:40
    }
  })
  
  export {
    customStyle
  }