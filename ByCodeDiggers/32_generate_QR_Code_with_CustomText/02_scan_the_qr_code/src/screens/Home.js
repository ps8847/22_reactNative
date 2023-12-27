import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
 
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'black' , justifyContent:'center'}}>
      <View style={{ marginBottom: 10 }}>
        <Button onPress={() => {navigation.navigate("ScannerScreen")}} title="Scan QrCode" />
      </View>

      <View>
        <Button onPress={() => {navigation.navigate("GeneratorScreen")}} title="Generate QrCode" />
      </View>
    </View>
  );
};

export default Home;
