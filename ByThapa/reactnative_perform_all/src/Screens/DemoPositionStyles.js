import React from 'react'
import {StyleSheet , View  , Text} from "react-native"

export default function DemoPositionStyles() {
  return (
    <View>
        <View style={styles.parentView}>
            <Text style={[styles.childText , styles.commonStyle]}>Box 1</Text>
            <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
            <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
            <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
            <View style={styles.subParent}>
            <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentView:{
        width:500,
        height:500,
        marginTop:100,
        marginHorizontal:10,
        borderWidth:3,
        borderColor:"#101820FF",
        backgroundColor:"aliceblue",
        position:"relative"
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
        right:0
    },
    childText3:{
        backgroundColor:"green",
        borderColor:"#2C5F2D",
        color:"white",
        bottom:0,
        right:0
    },
    childText4:{
        backgroundColor:"#97BC62FF",
        borderColor:"white",
        color:"white",
        bottom:0
    },
    childText5:{
        backgroundColor:"blue",
        borderColor:"white",
        color:"white",
    },
    commonStyle:{
        width:60,
        height:60,
        fontSize:20,
        borderWidth:1,
        position:"absolute"
    },
    subParent : {
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})