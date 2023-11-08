import React from 'react'
import {View  , Text, Image, StyleSheet, Button, Linking} from "react-native";

const NetflixCard = () => {
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