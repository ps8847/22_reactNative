import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListEDemo = () => {

    const names = [
        {key: "1" , name : "prince"},
        {key: "2" , name : "suraj"},
        {key: "3" , name : "mayank"},
        {key: "4" , name : "nikhil"},
        {key: "5" , name : "manpreet"}
    ]
    return (
      <FlatList data={names} renderItem={(element) => {
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