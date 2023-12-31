import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//
import BackgroundImg from '../../assets/img/bg-transferent.png';

export default function Login() {
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
          <FontAwesome5 name="angle-left" size={30} color="#fff" />

          <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
            Hi!
          </Text>
        </View>
        <View style={styles.formBottomContainer}>
          <View style={styles.formBottomSubContainer}>
            {/*  */}
            <View style={styles.customInputContainer}>
              <Text>Email</Text>
              <TextInput style={{padding: 0}} />
            </View>
            {/*  */}
            {/*  */}
            <View style={styles.customInputContainer}>
              <Text>Password</Text>
              <TextInput style={{padding: 0}} secureTextEntry={true} />
            </View>
            {/*  */}
            {/*  */}
            <TouchableOpacity style={styles.loginButton}>
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
                <Text style={{color:"white"}}>Don't Have An Account ? </Text>
                <TouchableOpacity>
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
                borderWidth:1,
                width:'50%',
                borderColor:"white",
                    color: '#02C38E',
                    fontWeight: 'bold',
                    textAlign:"center",
                    padding:3,
                    borderRadius:10
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
    backgroundColor: 'rgba(255,255,255,0.3)',
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
