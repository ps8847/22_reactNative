import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import NetInfo , { addEventListener } from "@react-native-community/netinfo";

const Home = () => {

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });

    unsubscribe();
  },[])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home