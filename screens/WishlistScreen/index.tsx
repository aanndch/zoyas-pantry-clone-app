import React from "react";
import { View, Text, FlatList } from "react-native";

import Product from "../../components/Product";
import { products } from "../../data";
import EmptyScreen from "../EmptyScreen";
import styles from "./styles";

const WishlistScreen = () => {
  const favorites = products.filter((product) => product.inWishlist);

  const header = (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>My</Text>
      <Text style={styles.heading}>Wishlist</Text>
    </View>
  );

  return favorites.length ? (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <Product
            product={item}
            insideWishlist={true}
            styles={{ marginBottom: 20 }}
          />
        )}
        ListHeaderComponent={() => header}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <EmptyScreen
      heading="No products added to the wishlist."
      inWishlist={true}
    />
  );
};

export default WishlistScreen;
