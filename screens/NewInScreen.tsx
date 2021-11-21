import React from "react";
import { Text, StyleSheet, View } from "react-native";
import COLORS from "../colors";

const NewInScreen = () => (
  <View style={styles.container}>
    <Text>NewIn</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
});

export default NewInScreen;
