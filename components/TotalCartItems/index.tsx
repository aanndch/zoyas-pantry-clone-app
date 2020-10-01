import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TotalCartItems = () => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(3);

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{numberOfItemsInCart}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b0e3d9",
  },
  text: {
    fontFamily: "PTSans_700Bold",
    fontSize: 16,
  },
});

export default TotalCartItems;
