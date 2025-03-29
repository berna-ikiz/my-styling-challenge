import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const responsiveButton = () => {
  const [buttonwidth, setButtonWidth] = useState(width);
  const [buttonHeight, setButtonHeight] = useState(height);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setButtonHeight(window.height);
      setButtonWidth(window.width);
      console.log("window", window.height);
    });
    return () => subscription?.remove();
  }, []);

  const styles = getStyles({ width, height });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Responsive Button😺</Text>
      </TouchableOpacity>
    </View>
  );
};
const getStyles = (dimension: { width: number; height: number }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFE8D6",
    },
    button: {
      backgroundColor: "lightblue",
      width: dimension.width * 0.8,
      height: dimension.height * 0.2,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "white",
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowColor: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: dimension.width > 400 ? 24 : 18,
      fontWeight: "bold",
    },
  });

export default responsiveButton;
