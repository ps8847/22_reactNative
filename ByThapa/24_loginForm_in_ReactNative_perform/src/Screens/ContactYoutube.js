import React, { useState } from "react";
import {View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    Pressable} from "react-native";
import CheckBox from "expo-checkbox";

const ContactYoutube = ({navigation}) => {
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
  
    const submit = () => {
      // return Alert.alert(userName , password)
  
      if (userName == "prince" && password == "123") {
        Alert.alert(`Thank you ${userName}`);
        navigation.navigate("Home" , {myName : userName})
      } else {
        Alert.alert(`Username and Passowrd is not correct`);
      }
    };
    const [agreed, setAgreed] = useState(false);
  
    return (


      <View >
        <Text style={styles.mainHeader}>Login Form</Text>
        <Text style={styles.description}>
          You can reach us anytime via any@prince.com
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your Name</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={userName}
            onChangeText={(actualData) => setuserName(actualData)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your Password</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(actualData) => setpassword(actualData)}
          />
        </View>
        <View style={styles.wrapper}>
          <CheckBox
            value={agreed}
            onValueChange={() => setAgreed(!agreed)}
            color={agreed ? "#4630EB" : undefined}
          />
          <Text style={styles.wrapperText}>
            I have read and agreed with the Terms and Conditions
          </Text>
        </View>
        <Pressable
          style={[
            styles.buttonStyle,
            {
              backgroundColor: agreed ? "#4630EB" : "grey",
            },
          ]}
          disabled={!agreed}
          onPress={() => submit()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
      
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height:"100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#fff",
      },
      inputContainer: {
        marginTop: 20,
      },
      mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
      },
      description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
      },
      labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
      },
      inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontSize: 18,
      },
      wrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
      },
      wrapperText: {
        marginLeft: 10,
        fontSize: 16,
      },
      buttonStyle: {
        marginTop: 30,
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },
});

export default ContactYoutube;