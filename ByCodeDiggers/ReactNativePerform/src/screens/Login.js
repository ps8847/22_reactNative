import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwsome from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

//
import BackgroundImg from '../../assets/img/bg-transferent.png';

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //
  const navigation = useNavigation();

  const handleServerError = (err, specificMessages = {}) => {
    if (err.response) {
      const status = err.response.status;
      const defaultMessage = 'An error occurred';
  
      if (status === 500) {
        alert(specificMessages[status] || 'Internal Server Error');
      } else if (status === 401 || status === 404) {
        alert(specificMessages[status] || 'User Not Found');
      } else {
        alert(specificMessages[status] || defaultMessage);
      }
    } else if (err.request) {
      console.log('No response received:', err.request);
      alert('No response received from the server');
    } else {
      console.log('Error during request setup:', err.message);
      alert('Error during request setup');
    }
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
  
      if (response.data.status === 'success') {
        alert('User Login Successfully');
      } else {
        alert('User Not Found');
      }
  
      console.log(response.data);
    } catch (err) {
      handleServerError(err);
    }
  };
  

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.topBackgroundImgContainer}>
        <Image
          source={BackgroundImg}
          style={styles.backgroundImg}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomBackgroundImgContainer}></View>
      <View style={styles.formContainer}>
        <View style={styles.formTopContainer}>
          <FontAwsome name="angle-left" size={30} color="#fff" />

          <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
            Hi!
          </Text>
        </View>
        <View style={styles.formBottomContainer}>
          <View style={styles.formBottomSubContainer}>
            {/*  */}
            <View style={styles.customInputContainer}>
              <Text>Email</Text>
              <TextInput
                style={{padding: 0}}
                onChangeText={text => setEmail(text)}
              />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.customInputContainer}>
              <Text>Password</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                  style={{padding: 0}}
                  secureTextEntry={!isPasswordVisible}
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <FontAwsome
                    name={isPasswordVisible ? 'eye-slash' : 'eye'}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/*  */}
            {/*  */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                loginUser();
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 17}}>
                Login
              </Text>
            </TouchableOpacity>
            {/*  */}
            {/*  */}
            <Text style={{textAlign: 'center', color: '#fff'}}>Or</Text>
            {/*  */}
            {/*  */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                {
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  padding: 20,
                  justifyContent: 'space-around',
                },
              ]}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
                }}
                style={{height: 30, width: 30}}
              />
              <Text style={{fontWeight: 'bold'}}>Continue With Google</Text>
              <View></View>
            </TouchableOpacity>
            {/*  */}
            {/*  */}
            <View>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Text style={{color: '#fff'}}>Don't Have An Account</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Signup');
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      color: '#02C38E',
                      fontWeight: 'bold',
                    }}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 5,
                    color: '#02C38E',
                    fontWeight: 'bold',
                  }}>
                  Forget Your Password ?
                </Text>
              </TouchableOpacity>
            </View>
            {/*  */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050907',
  },
  topBackgroundImgContainer: {
    flex: 1.5,
    alignItems: 'flex-end',
  },
  backgroundImg: {
    height: '100%',
    width: '80%',
    marginRight: -15,
  },
  bottomBackgroundImgContainer: {
    flex: 1,
  },
  formContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  formTopContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    marginLeft: 10,
  },
  formBottomContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBottomSubContainer: {
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'rgba(127,127,127,0.5)',
    padding: 20,
  },
  customInputContainer: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#02C38E',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#02C38E',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
});
