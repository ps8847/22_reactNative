import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import FilePicker, {types} from 'react-native-document-picker';

export default function Home() {
  const [fileData, setfileData] = useState([]);
  const handleFilePicker = async () => {
    console.log('heyy');
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [types.images], // single type
      });
      console.log(response[0]);
      setfileData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {fileData.length > 0
        ? fileData.map((item, i) => {
            return (
              <View key={i}>
          
                <Image
                  source={{uri: item.uri}}
                  style={{height: 300, width: 300 , marginBottom:10}}
                />
              </View>
            );
          })
        : null}
      <TouchableOpacity
        onPress={() => handleFilePicker()}
        style={{
          backgroundColor: 'blue',
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <Text style={{color: '#fff'}}>Open</Text>
      </TouchableOpacity>
    </View>
  );
}
