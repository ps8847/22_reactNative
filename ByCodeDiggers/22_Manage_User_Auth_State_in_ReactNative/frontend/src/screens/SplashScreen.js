import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, { useEffect, useState } from 'react';

//
import Logo from '../../assets/img/logo.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions, useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
 
const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
     const isUserLogin = await AsyncStorage.getItem('isUserLogin')

     if(isUserLogin == 'true'){
      navigation.dispatch(StackActions.replace('Home'))
    } else {
       navigation.dispatch(StackActions.replace('Login'))

     }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View></View>

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />

        <Text style={styles.text}>Code Diggers</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Made With 💗 From India</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  text: {
    color: '#fff',
  },
  bottomContainer: {},
  bottomText: {
    color: '#fff',
  },
});
