import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FilePicker , {types} from 'react-native-document-picker';

export default function Home() {
  const [fileData, setfileData] = useState([]);
  const handleFilePicker = async () => {
    console.log("heyy");
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection:true,
        // type:[types.images]      // single type
        type:[types.images , types.doc]      // multyiple type
      });
      console.log(response[0]);
      setfileData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {fileData.length > 0 ? 
      fileData.map((item , i) => <Text key={i} style={{marginBottom:10}}>Name : {item.name}</Text>)
          
      
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