import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:1}}>

      <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
      <Text>Hello</Text>
      </View>
      <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
      <Text>World</Text>
      </View>
      <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
      <Text>Prince</Text>
      </View>
    </View>
  )
}

export default App