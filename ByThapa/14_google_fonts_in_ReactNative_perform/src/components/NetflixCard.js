import React from 'react'
import {View  , Text, Image, StyleSheet, Button, Linking} from "react-native";
import {
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  } from '@expo-google-fonts/josefin-sans';

  import {useFonts} from "expo-font"

  import AppLoading from "expo-app-loading"

const NetflixCard = () => {
    let [fontload] = useFonts({
        JosefinSans_100Thin,
        JosefinSans_200ExtraLight,
        JosefinSans_300Light,
        JosefinSans_400Regular,
        JosefinSans_500Medium,
        JosefinSans_600SemiBold,
        JosefinSans_700Bold,
        JosefinSans_100Thin_Italic,
        JosefinSans_200ExtraLight_Italic,
        JosefinSans_300Light_Italic,
        JosefinSans_400Regular_Italic,
        JosefinSans_500Medium_Italic,
        JosefinSans_600SemiBold_Italic,
        JosefinSans_700Bold_Italic,
    });

    if(!fontload){
        return <AppLoading />
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Netflix card</Text>
            <View style={styles.poster}>
                <Image 
                style={styles.imgStyle}
                source={{uri:"https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_FMjpg_UX1000_.jpg"}}/>
            <View style={styles.poster_info}>
                <Text style={styles.poster_title}>Stranger Things</Text>
                <Text  style={styles.poster_text}> is aa amaxi=zing netflix wbeseries  , 
                
                it is driected by netfliux and casted by nextflix  , , bla  , ,, bla  , , bl;a</Text>
            </View>
            <Button title="Watch now" onPress={() => Linking.openURL("https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_FMjpg_UX1000_.jpg")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:50,
        justifyContent:"center",
        alignItems:"center"
    },
    header:{
        fontSize:30,
        marginBottom:20,
        fontFamily:'JosefinSans_700Bold',
    },
    poster:{
        width:250,
        borderWidth:1,
        alignItems:"center"
    },
    poster_info:{
        alignItems:"center",
        marginVertical:10
    },
    poster_title:{
        fontSize:20,
        marginBottom:10
    },
    poster_text:{
        color:"#999",
        paddingHorizontal:20,
        marginBottom:10
    },
    imgStyle:{
        width:"100%",
        height:undefined,
        aspectRatio:1
    },
    buttonStyle:{
        borderWidth:0,
        borderRadius:20
    }
})

export default NetflixCard;