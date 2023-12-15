import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {

    function handleNavigation(screenname){
        navigation.navigate(screenname)
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View>
        <TouchableOpacity style={{backgroundColor:'lightblue', padding:30, marginBottom:20}} onPress={() => handleNavigation('Screen1')}>
            <Text>Screen 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'lightblue', padding:30, marginBottom:20}} onPress={() => handleNavigation('Screen2')}>
            <Text>Screen 2</Text>
        </TouchableOpacity>
    </View>
  </View>
  )
}