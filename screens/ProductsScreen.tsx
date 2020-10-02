import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStackParamList } from "../types";

interface ProductsScreenProps {
  navigation: StackNavigationProp<HomeStackParamList>;
}

const ProductsScreen = ({ navigation }: ProductsScreenProps) => (
  <SafeAreaView style={styles.container}>
    <Text>Products Page</Text>
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

export default ProductsScreen;
