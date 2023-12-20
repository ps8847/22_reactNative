import {View, Text, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';

const Home = () => {

  let [isRotate , setIsRotate] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change' , () => {

      const orientation = isPortrait();

      setIsRotate(orientation)
    })
  } , [])

  const isPortrait = () => {
    const {height, width} = Dimensions.get('screen');

    return height > width ? false : true
  }
 
  return (
    <View
      style={{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isRotate ? "row" : "column",
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%",
          height:"100%"
        }}>
        <Text>Hello</Text>
      </View>
      <View
        style={{
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          width: "100%",
          height:"100%"
        }}>
        <Text>World</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          width: "100%",
          height:"100%"
        }}>
        <Text>Again</Text>
      </View>
    </View>
  );
};

export default Home;
