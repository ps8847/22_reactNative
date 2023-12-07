import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";

const CardDetail = ({textData , imgSrc}) => {
    return (
        <View style={styles.listStyle}>
            <Text style={styles.textStyle}>{textData}</Text>
            <Image style={styles.imageStyle} source={imgSrc}/>
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

export default CardDetail