import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import {albumPhotoUrl} from './src/utils/util';
import axios, {Axios} from 'axios';

export default function App() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);
  const fetchApiData = async () => {
    try {
      const response = await axios.get(albumPhotoUrl);
      console.log(response);
      setPostData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={styles.scrollViewStyle}>
{
  postData?.map((item,id) => {
    return <View style={styles.container} key={id}>
      <View style={styles.cardContainer}>
        <Image
          source={{uri: item.url}}
          style={styles.cardImage}
        />
        <Text style={styles.cardTextTitle}>{item.title}</Text>
      </View>
    </View>
  })
}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollViewStyle:{

  },
  cardContainer: {
    width:'90%',
    marginVertical:20,
    paddingHorizontal:10,
    paddingVertical:20,
    borderRadius:20,
    shadowOffset:{
      width:0,
      height:0
    },
    shadowOpacity:0.8,
    shadowRadius:1,
    elevation:-2
  },
  cardImage: {
    height: 300,
    width: "100%",
    borderRadius:20
  },
  cardTextTitle:{
    marginVertical:10,
    textAlign:'center'
  }
});
