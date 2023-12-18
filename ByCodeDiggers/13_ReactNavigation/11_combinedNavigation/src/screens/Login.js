import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Login</Text>

      <TouchableOpacity style={{backgroundColor:'blue' , padding:20, marginVertical:20}} onPress={() => navigation.navigate("DrawerNavigator")}>
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={{color:"red"}}>New User Signup</Text>
      </TouchableOpacity>
    </View>
  )
}