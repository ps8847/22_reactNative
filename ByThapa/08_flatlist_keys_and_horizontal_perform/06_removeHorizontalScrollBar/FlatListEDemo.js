import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatListEDemo = () => {
  const names = [
    { index: "1", name: "prince" },
    { index: "2", name: "suraj" },
    { index: "3", name: "mayank" },
    { index: "4", name: "nikhil" },
    { index: "5", name: "manpreet" },
    { index: "6", name: "chanda" },
    { index: "7", name: "suraj" },
    { index: "8", name: "suman" },
  ];
  return (
    <FlatList style={styles.listStyle}
      keyExtractor={(index) => {
        return index.index;
      }}
      data={names}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(element) => {
        return <Text style={styles.textStyles}>{element.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 40,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default FlatListEDemo;
