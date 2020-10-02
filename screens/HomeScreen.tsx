import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";

interface HomeScreenProps {
  navigation: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <SafeAreaView style={styles.container}>
    <Button
      title="New In"
      onPress={() => navigation.navigate("ProductsScreen")}
    />
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
