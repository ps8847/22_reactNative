import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListEDemo = () => {

    const names = [
        {name : "prince"},
        {name : "suraj"},
        {name : "mayank"},
        {name : "nikhil"},
        {name : "manpreet"}
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