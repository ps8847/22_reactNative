import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListEDemo = () => {

  const names = [
    {index: "1" , name : "prince"},
    {index: "2" , name : "suraj"},
    {index: "3" , name : "mayank"},
    {index: "4" , name : "nikhil"},
    {index: "5" , name : "manpreet"}
]
return (
  <FlatList keyExtractor={(index) => {return index.index}} data={names} renderItem={(element) => {
    return <Text style={styles.textStyles}>{element.item.name}</Text>
  }} />
    )
}

const styles  = StyleSheet.create({
    textStyles:{
        fontSize:40
    }
})

export default FlatListEDemo;