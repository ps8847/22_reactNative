import { View, Text } from 'react-native'
import React from 'react'
import NetInfo , { useNetInfo } from "@react-native-community/netinfo";

const Home = () => {

  const net = useNetInfo()

  return (
    <View style={{flex:1,justifyContent:'center' , alignItems:'center'}}>
      <Text>Type = {net.type}</Text>
      <Text>IsConnected = {net.isConnected ? "connect" : "disconnect"}</Text>
    </View>
  )
}

export default Home