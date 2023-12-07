import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

const HookEffect = () => {
  const [myUserData, setMyUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getUserData = async () => {
    try {
      let response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      let finalData = await response.json();
      setMyUserData(finalData);
      setIsLoading(false);
      console.log(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#7F58FF"
          />
        </View>
      ) : (
        <View>
            <Text style={styles.mainHeader}>List of Students</Text>
        <FlatList
          data={myUserData}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: item.image }}
                />
              </View>
              <View>
                <View style={styles.bioDataContainer}>
                  <Text style={styles.bioData}>Bio-Data</Text>
                  <Text style={styles.idNumber}>{item.id}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>Name: {item.name}</Text>
                  <Text style={styles.text}>Email: {item.email}</Text>
                  <Text style={styles.text}>Mobile: {item.mobile}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#b696d7",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 15,
  },
  imageContainer: {
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 5,
  },
  bioDataContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    borderRadius: 5,
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255,255,255,0.5)",
  },
  bioData: {
    fontSize: 20,
    color: "#fff",
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "#555",
  }, mainHeader: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HookEffect;
