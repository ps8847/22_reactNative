import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  let [inputBoxValue, setinputBoxValue] = useState('');
  let [storageDataList, setstorageDataList] = useState('');

  const addItemTolist = async () => {
    try {
      await AsyncStorage.setItem('itemList', inputBoxValue);
      setinputBoxValue('')
      await getItemList()
      alert("Data is Added")
    } catch (error) {
      console.log(error);
    }
  }
  
  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem('itemList');
      setstorageDataList(data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={inputBoxValue}
        placeholder='Enter Data'
        onChangeText={val => setinputBoxValue(val)}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => addItemTolist()}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>

      <Text>Your Data is : {storageDataList}</Text>
    </View>
  );
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  addButton: {
    width: width - 20,
    backgroundColor: 'blue',
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 10,
  },
});
