import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';

export default function Home() {

  let [isPasswordVisible , setisPasswordVisible] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.inputBoxContainer}>
        <Ionicon name="mail" size={25} />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Email"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.inputBoxContainer}>
        <FontAwesome5 name="lock" size={25} />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Password"
          secureTextEntry={isPasswordVisible ? false : true}
          placeholderTextColor={'gray'}
        />
        <TouchableOpacity onPress={() => setisPasswordVisible(!isPasswordVisible)}>
        <FontAwesome5 name={isPasswordVisible ? "eye-slash" : "eye"} size={25} />
        </TouchableOpacity>
   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  inputBoxContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputBox: {
    marginHorizontal:10,
    flex:1
  },
});
