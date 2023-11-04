import React from "react";
import { Alert, Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OurTouchableOpa = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Touchable Opa</Text>
    <TouchableOpacity onPress={() => Alert.alert("sub now")}>
    <Text>subsrcibe Now</Text>
    </TouchableOpacity>
    <br />
    <br />
    <TouchableOpacity onPress={() => Alert.alert("image clicked now")}>
    <Image style={styles.imageStyle} source={require("../../assets/test1.jpg")}/>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
  },
  imageStyle:{
    width:300,
    height:300
}
});

export default OurTouchableOpa;
