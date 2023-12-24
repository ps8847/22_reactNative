import {View, Text} from 'react-native';
import React from 'react';

const DisconnectPage = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text style={{color:'white' , fontWeight:'bold' , fontSize:20}}>Oops Network is Disconnected ...</Text>
    </View>
  );
};

export default DisconnectPage;
