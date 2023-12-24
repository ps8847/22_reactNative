import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo , { addEventListener } from "@react-native-community/netinfo";

const Home = () => {

  const [myNetInfo , setmyNetInfo] = useState("");

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setmyNetInfo(state)
    });

    unsubscribe();
  },[])

  return (
    <View style={{flex:1,justifyContent:'center' , alignItems:'center'}}>
      <Text>Type = {myNetInfo.type}</Text>
      <Text>IsConnected = {myNetInfo.isConnected ? "connect" : "disconnect"}</Text>
    </View>
  )
}

export default Home