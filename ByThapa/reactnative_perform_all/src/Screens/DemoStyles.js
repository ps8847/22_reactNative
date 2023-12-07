import React from 'react'
import {StyleSheet , View  , Text} from "react-native"

export default function DemoStyles() {
  return (
    <View>
        <View style={styles.parentView}>
            <Text style={[styles.childText , styles.commonStyle]}>Box Model RN</Text>
            <Text style={[styles.childText2, styles.commonStyle]}>Box Model RN</Text>
            <Text style={[styles.childText3, styles.commonStyle]}>Box Model RN</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parentView:{
        width:"95%",
        marginTop:100,
        marginHorizontal:10,
        borderWidth:3,
        borderColor:"#101820FF"
    },
    childText:{
        backgroundColor:"#97BC62FF",
        borderColor:"#2C5F2D",
        color:"#2C5F2D",
       
    },
    childText2:{
        backgroundColor:"#D4B996FF",
        borderColor:"#A07855FF",
        color:"#A07855FF",
       
    },
    childText3:{
        backgroundColor:"#9CC3D5FF",
        borderColor:"#0063B2FF",
        color:"#0063B2FF",
       
    },
    commonStyle : {
      fontSize:20,
    //   padding:30,

      // in react Native to get paddin top + padding bottom   note : same for marrgin and all
      paddingVertical:50,
      // in react Native to get paddin left + right bottom    note : same for marrgin and all
    //   paddingHorizontal:100,

      textAlign:"center",
      borderWidth:4,

      marginBottom:30,
      marginHorizontal:50,

    }
})
