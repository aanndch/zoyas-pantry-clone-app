import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ProductType } from "../../types";
import Button from "../Button";
import styles from "./styles";

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <AntDesign
        name={product.inWishlist ? "heart" : "hearto"}
        size={25}
        color="#402661"
        style={styles.favoriteIcon}
      />
      <View style={styles.details}>
        <Text style={styles.categoryName}>{product.category}</Text>
        <Text style={styles.name}>{product.name}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>${product.price}</Text>
        <Button
          text="Add to Bag"
          width={100}
          onPressFn={() => {
            console.log("Added to bag!");
          }}
        />
      </View>
    </View>
  );
};

export default Product;
