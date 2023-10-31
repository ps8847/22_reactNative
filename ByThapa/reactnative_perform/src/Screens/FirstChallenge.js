import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

export default function FirstChallenge() {

    let name  = "prince"
  return (
    <View>
        <Text style={styles.textStyleOne}>Welcome to Prince Sharma challenge </Text>
        <Text>we love reatc bnative and i am aa subscriber of prince sharma youtube channel</Text>
        <Text>Hii , my name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyleOne:{
        fontSize:40,
        color:"red",
        fontWeight:"bold"
    },
    textStyleTwo:{
        fontSize:30,
    }
})
