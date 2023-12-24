import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FilePicker from 'react-native-document-picker';

export default function Home() {
  const [fileData, setfileData] = useState([]);
  const handleFilePicker = async () => {
    console.log("heyy");
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
      });
      console.log(response[0]);
      setfileData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {fileData.length > 0 ? (
      
          <Text style={{marginBottom:10}}>Name : {fileData[0].name}</Text>
      
      ) : null}
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
