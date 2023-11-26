import React from "react"
import { StyleSheet , View , Text , FlatList } from "react-native"

const ChallengeFlatList = () => {
    const netflixSereis = [
        {
            name: "EMILY-IN-PARIS",
            year: "2021",
            creator: "unknown",
            Genre: "Horror,Thriller"
        },
        {
            name: "Galactic Explorers",
            year: "2022",
            creator: "Stellar Studios",
            Genre: "Sci-Fi,Adventure"
        },
        {
            name: "Midnight Serenade",
            year: "2020",
            creator: "Melody Masters",
            Genre: "Drama,Romance"
        },
        {
            name: "Chronicles of Destiny",
            year: "2019",
            creator: "Epic Saga Studios",
            Genre: "Fantasy,Action"
        },
        {
            name: "Echoes in the Shadows",
            year: "2023",
            creator: "Mystery Maven",
            Genre: "Mystery,Crime"
        },
        {
            name: "Quantum Quandary",
            year: "2018",
            creator: "TechTales Inc.",
            Genre: "Science Fiction,Thriller"
        },
        {
            name: "Whispers of Wonderland",
            year: "2022",
            creator: "Imagination Inventions",
            Genre: "Fantasy,Adventure"
        },
        {
            name: "Crimson Carnival",
            year: "2017",
            creator: "Dark Delights Productions",
            Genre: "Horror,Dark Fantasy"
        },
        {
            name: "Starlight Symphony",
            year: "2023",
            creator: "Cosmic Creations",
            Genre: "Music,Drama"
        },
        {
            name: "Puzzle of Portals",
            year: "2016",
            creator: "Mindbender Studios",
            Genre: "Puzzle,Adventure"
        }
    ];

    return (

        // // for vertical 
        // <FlatList keyExtractor={(key) => {return key.name}} style={styles.listStyle} data={netflixSereis} renderItem={({item}) => {
        //     return (<View style={styles.viewStyle}>
        //         <Text style={styles.textStyles}>{item.name}</Text>
        //         <Text style={styles.textStyles}>{item.creator}</Text>
        //         <Text style={styles.textStyles}>{item.year}</Text>
        //         <Text style={styles.textStyles}>{item.Genre}</Text>
        //     </View>)
        // }}/>

        // for horizontal 
        <FlatList horizontal showsHorizontalScrollIndicator={false} keyExtractor={(key) => {return key.name}} style={styles.listStyle} data={netflixSereis} renderItem={({item}) => {
            return (<View style={styles.viewStyle}>
                <Text style={styles.textStyles}>{item.name}</Text>
                <Text style={styles.textStyles}>{item.creator}</Text>
                <Text style={styles.textStyles}>{item.year}</Text>
                <Text style={styles.textStyles}>{item.Genre}</Text>
            </View>)
        }}/>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        margin:20,
        padding:5,
    },
    textStyles:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        backgroundColor:"#009688"
    },
    viewStyle:{
        padding:5,
        margin:20
    }
})

export default ChallengeFlatList;