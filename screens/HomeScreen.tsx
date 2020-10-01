import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    {/* <Text>Home</Text> */}
    {/* <Button title="New In" onPress={() => navigation.navigate("NewIn")} /> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default HomeScreen;
