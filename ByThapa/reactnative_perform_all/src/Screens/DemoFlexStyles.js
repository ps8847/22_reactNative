import React from 'react'
import {StyleSheet , View  , Text} from "react-native"

export default function DemoFlexStyles() {
  return (
    <View>
        <View style={styles.parentView}>
            <Text style={[styles.childText , styles.commonStyle]}>Box 1</Text>
            <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
            <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
            <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
            <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentView:{
        width:"205%",
        height:500,
        marginTop:100,
        marginHorizontal:10,
        borderWidth:3,
        borderColor:"#101820FF",
        backgroundColor:"aliceblue",
        // flexDirection:"column",  // default 
        // flexDirection:"row"
        // flexDirection:"column-reverse",
        // justifyContent:"center",
        // justifyContent:"flex-start",
        // justifyContent:"flex-end",
        // justifyContent:"space-between",
        justifyContent:"space-around",
        // alignItems:"center"
    },
    childText:{
        backgroundColor:"orange",
        borderColor:"white",
        color:"white"
    },
    childText2:{
        backgroundColor:"red",
        borderColor:"white",
        color:"white",
        // flex:1
    },
    childText3:{
        backgroundColor:"green",
        borderColor:"#2C5F2D",
        color:"white",
        // alignSelf:"center"
    },
    childText4:{
        backgroundColor:"#97BC62FF",
        borderColor:"white",
        color:"white"
    },
    childText5:{
        backgroundColor:"blue",
        borderColor:"white",
        color:"white",
        // flex:2 
    },
    commonStyle:{
        width:60,
        height:60,
        fontSize:20,
        borderWidth:1
    }
})