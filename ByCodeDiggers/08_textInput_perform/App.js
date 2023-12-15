import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [inputBoxValue , setinputBoxValue] = useState("");

  return (
    <View style={style.mainContainer}>
      <TextInput style={style.inputBox} value={inputBoxValue} onChangeText={(val) => setinputBoxValue(val)}/>
      <View style={style.outputView}>
        <Text>{inputBoxValue}</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  inputBox:{
    borderWidth:2,
    borderColor:"#000",
    margin:10,
    borderRadius:50,
    padding:20
  },
  outputView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})