import { View, Text } from 'react-native'
import React from 'react'

export default function Profile({route,navigation}) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View>
            <Text>Name : {route.params.username}</Text>
            <Text>Email : {route.params.userEmail}</Text>
            <Text>Password : {route.params.userPassword}</Text>
        </View>
  
    </View>
  )
}