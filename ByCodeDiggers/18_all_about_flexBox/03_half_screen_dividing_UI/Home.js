import {View, Text, Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
      }}>
    <View
      style={{
        backgroundColor: 'red',
        flex:1,
        width:300,
        height:300
      }}>

    </View>
    <View
      style={{
        backgroundColor: 'yellow',
        flex:1,
        width:300,
        height:300
      }}>

    </View>
    </View>
  );
};

export default Home;
