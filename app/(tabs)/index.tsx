import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the app! 😻</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE8D6",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
});
export default index;
