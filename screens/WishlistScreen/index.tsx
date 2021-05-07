import React from "react";
import { View, Text, FlatList } from "react-native";

import Product from "../../components/Product";
import { ProductType } from "../../types";
import EmptyScreen from "../EmptyScreen";
import styles from "./styles";

const WishlistScreen = () => {
  const wishlistedItems = [] as ProductType[];

  const header = (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>My</Text>
      <Text style={styles.heading}>Wishlist</Text>
    </View>
  );

  return wishlistedItems.length ? (
    <View style={styles.container}>
      <FlatList
        data={wishlistedItems}
        renderItem={({ item }) => (
          <Product
            product={item}
            insideWishlist={true}
            styles={{ marginBottom: 20 }}
          />
        )}
        ListHeaderComponent={() => header}
        // TODO: Change key to ID generated from DB
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <EmptyScreen
      heading="No products added to your wishlist."
      inWishlist={true}
    />
  );
};

export default WishlistScreen;
