import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function App() {

  const [data , setdata] = useState([
    {id : 1 , name : "Prince"},
    {id : 2 , name : "Prince2"},
    {id : 3 , name : "Prince3"},
    {id : 4 , name : "Prince4"},
    {id : 5 , name : "Prince5"},
    {id : 6 , name : "Prince6"},
    {id : 7 , name : "Prince7"},
    {id : 8 , name : "Prince8"},
    {id : 9 , name : "Prince9"},
  ])

  return (
    <View style={style.container}>
      <ScrollView>

      {
        data.map((item , index) => {
          return (
            <View key={item.id}>
              <Text style={style.customText}>{item.name}</Text>
              </View>
          )
        })
      }
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1
  },
  customText:{
    fontSize:30,
    textAlign:"center",
    backgroundColor:"pink",
    marginTop:10,
    marginBottom:20,
    marginHorizontal:20,
    padding:20
  }
})