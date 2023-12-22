import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';

// note : we cna also use any toast library from internet to make our toiats messsages beautiful 

export default function Home() {

  const showToastMsg = () => {
    try {

      // message , duration of message
      // ToastAndroid.show("Hello World" , ToastAndroid.SHORT)

      // message , duration , postion
      // ToastAndroid.showWithGravity("Hello World" , ToastAndroid.LONG , ToastAndroid.TOP)
     
      // message , duration , postion , offset -> padding from left and top
      ToastAndroid.showWithGravityAndOffset("Hello World" , ToastAndroid.LONG , ToastAndroid.TOP , 50 , 50)

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
      onPress={() => showToastMsg()}
        style={{
          backgroundColor: 'red',
          width: '80%',
          alignItems: 'center',
          padding: 10,
          borderRadius: 20,
        }}>
        <Text style={{color: '#fff'}}>Show Toast Msg</Text>
      </TouchableOpacity>
    </View>
  );
}
