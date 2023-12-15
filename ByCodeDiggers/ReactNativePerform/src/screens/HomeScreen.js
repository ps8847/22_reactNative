import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

export default function HomeScreen({navigation}) {
  let [name, setname] = useState('');
  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');

  let handelSubmit = () => {
    navigation.navigate("Profile" , {username:name,userEmail:email,userPassword:password})
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{textAlign: 'center', marginBottom: 20}}>
          Please enter your information
        </Text>
        <TextInput
          style={styles.input}
          placeholder="enter your name"
          value={name}
          onChangeText={val => setname(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter your email"
          value={email}
          onChangeText={val => setemail(val)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={val => setpassword(val)}
        />

        <TouchableOpacity style={styles.submitbtn} onPress={() => handelSubmit()}>
          <Text style={{textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  input: {
    width: width - 20,
    borderWidth: 2,
    marginTop: 20,
    padding: 10,
  },
  submitbtn: {
    backgroundColor: 'lightblue',
    width: width - 20,
    borderWidth: 2,
    marginTop: 20,
    padding: 10,
    borderRadius: 30,
  },
});
