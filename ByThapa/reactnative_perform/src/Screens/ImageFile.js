import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";

const ImageFile = () => {
    return (
        <View style={styles.listStyle}>
            <Text style={styles.textStyle}>this is images file</Text>
            <Image style={styles.imageStyle} source={require("../../assets/test1.jpg")}/>
            <Image style={styles.imageStyle} source={require("../../assets/test2.jpg")}/>
            <Image style={styles.imageStyle} source={require("../../assets/test4.jpg")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textStyle:{
        fontSize:30,
        margin:30
    },
    imageStyle:{
        width:300,
        height:300
    }
})

export default ImageFile