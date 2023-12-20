import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  let [inputBoxValue, setinputBoxValue] = useState('');
  let [storageDataList, setstorageDataList] = useState([]);

  const addItemTolist = async () => {
    try {
      storageDataList.push(inputBoxValue)

      const output = JSON.stringify(storageDataList)
      await AsyncStorage.setItem('itemList', output);
      setinputBoxValue('')
      alert("Data is Added")
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    async function dummyfunc(){
      await getItemList()
    }

    dummyfunc();
  },[])

  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem('itemList');
      const output = JSON.parse(data)
      setstorageDataList(output)
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

<View style={styles.list}>

      <Text style={{fontSize:20,fontWeight:'bold',marginBottom:30}}>Array list </Text>

      {
        storageDataList.map((item , ind) => <Text key={ind} style={{marginVertical:10}}>{item}</Text>)
      }
</View>
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
  list:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});
