import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Product from "../../components/Product";
import Filter from "../../components/Filter";
import products from "../../data";
import { HomeStackParamList } from "../../types";
import styles from "./styles";

interface ProductsScreenProps {
  navigation: StackNavigationProp<HomeStackParamList>;
}

const ProductsScreen = ({ navigation }: ProductsScreenProps) => (
  <SafeAreaView style={styles.container}>
    <Filter />
    <FlatList
      data={products}
      renderItem={({ item }) => <Product product={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <View style={{ marginVertical: 35 }} />}
      ItemSeparatorComponent={() => <View style={{ marginVertical: 10 }} />}
      ListFooterComponent={() => <View style={{ marginVertical: 15 }} />}
    />
  </SafeAreaView>
);

export default ProductsScreen;
