import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={"yellow"} />
      <View style={customStyle.shape}/>
    </View>
  )
}

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

export default App