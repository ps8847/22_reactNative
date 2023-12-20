import {View, Text , Dimensions} from 'react-native';
import React from 'react';

const {height , width} = Dimensions.get('screen')

const Home = () => {
  return (
    <View style={{height:height, justifyContent: 'center', alignItems: 'center'}}> 
      <Text>Home</Text>
    </View>
  );
};

export default Home;
