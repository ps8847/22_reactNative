import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import React from 'react';
import Logo from '../../assets/img/logo.jpg';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View></View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Prince Sharma</Text>
      </View>

      <View style={styles.buttomContainer}>
        <Text style={styles.buttomText}>Made with ❤️ from INDIA</Text>
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

  buttomContainer: {},
  buttomText: {
    color: 'white',
  },
});
