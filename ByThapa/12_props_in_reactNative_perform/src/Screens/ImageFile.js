import React from 'react'
import {View} from "react-native";
import CardDetail from '../components/CardDetail';

const ImageFile = () => {
    return (
        <View>
            <CardDetail textData={"This si my first image"} imgSrc={require("../../assets/test1.jpg")}/> 
            <CardDetail textData={"This si my Second image"} imgSrc={require("../../assets/test2.jpg")}/> 
            <CardDetail textData={"This si my Third image"} imgSrc={require("../../assets/test4.jpg")}/> 
        </View>
    )
}

export default ImageFile