import React from "react";
import { Alert, Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

const OurButtons = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Buttons</Text>
      <Button
        title="join now"
        onPress={() => Alert.alert("Button PRESSED!")}
        // onPress={() => console.log("subsrcibe to prince sharma")}
        // disabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
  },
});

export default OurButtons;
