import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const Card = ({ cardTitle, cardDescription }) => {
  return (
    <View style={styles.card}>
      <Image
        source={require("./../assets/images/cac67dcda90f61e2cc35bf8382c7198b.jpg")}
        style={styles.image}
      />
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardText}>{cardDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: height * 0.04,
    marginTop: height * 0.04,
    alignItems: "center",
    backgroundColor: "#FFF3E1",
  },
  image: {
    width: "100%",
    height: height * 0.4,
    borderRadius: 5,
    marginBottom: height * 0.02,
  },

  cardText: {
    fontSize: 16,
    padding: 12,
    color: "#4E4D46",
    textAlign: "justify",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: height * 0.01,
  },
});

export default Card;
