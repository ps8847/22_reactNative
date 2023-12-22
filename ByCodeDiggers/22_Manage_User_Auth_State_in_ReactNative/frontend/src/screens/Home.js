import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      Alert.alert("Warning" , "Are you Sure To Logout ? " , [
        {text:'Yes' , onPress: async () => {
          await AsyncStorage.clear();
          navigation.dispatch(StackActions.replace('Login'));

        }},
        {text:'No'}
      ])
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>

      <TouchableOpacity
        style={{
          marginVertical: 10,
          padding: 0,
          height: 30,
          backgroundColor: 'red',
          width: '80%',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => handleLogout()}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
