import React from "react";
import { View, Text, FlatList } from "react-native";

import Product from "../../components/Product";
import { products } from "../../data";
import styles from "./styles";

const WishlistScreen = () => {
  const favorited = products.filter((product) => product.inWishlist);

  const header = (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>My</Text>
      <Text style={styles.heading}>Wishlist</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorited}
        renderItem={({ item }) => (
          <Product
            product={item}
            insideWishlist={true}
            styles={{ marginBottom: 20 }}
          />
        )}
        ListHeaderComponent={() => header}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default WishlistScreen;
