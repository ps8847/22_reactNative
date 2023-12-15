import { View, Text , StyleSheet, Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [counter, setcounter] = useState(0)

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => setcounter(counter - 1)}>
      <View style={style.customButton}><Text style={style.buttonText}>-</Text></View>
      </TouchableOpacity>
      <Text style={style.counterText}>{counter}</Text>
      <TouchableOpacity onPress={() => setcounter(counter + 1)}>
      <View style={style.customButton}><Text style={style.buttonText}>+</Text></View>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row"
  },
  customButton:{
    backgroundColor:"blue",
    color:"#fff",
    height:50,
    width:50,
    borderRadius:20
  },
  buttonText:{
    color:"#fff",
    fontSize:30,
    textAlign:"center"
  },
  counterText:{
    fontSize:40
  }
})