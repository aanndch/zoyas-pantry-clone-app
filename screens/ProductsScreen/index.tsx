import React from "react";
import { FlatList, View } from "react-native";
import Filter from "../../components/Filter";
import Product from "../../components/Product";
import { products } from "../../data";
import styles from "./styles";

const ProductsScreen = () => (
  <View style={styles.container}>
    <Filter />
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Product
          product={item}
          insideWishlist={false}
          styles={{ marginVertical: 10 }}
        />
      )}
      // TODO: Add id generated from DB
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => <View style={{ marginVertical: 30 }} />}
      ListFooterComponent={() => <View style={{ marginVertical: 5 }} />}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

export default ProductsScreen;
