import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const Home = () => {

  // in reatc natoive the default row diretcion is column 
  return (
    <View
      style={{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:"row",
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          height:height
        }}>
        <Text>Hello</Text>
      </View>
      <View
        style={{
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          width: width,
          height:height
        }}>
        <Text>World</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          width: width,
          height:height
        }}>
        <Text>Again</Text>
      </View>
    </View>
  );
};

export default Home;


