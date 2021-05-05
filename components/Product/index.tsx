import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { ProductType } from "../../types";
import Button from "../Button";
import styles from "./styles";
import OutOfStockButton from "../OutOfStockButton";

interface ProductProps {
  product: ProductType;
  insideWishlist: boolean;
  styles?: Object;
}

const Product = ({
  product,
  insideWishlist,
  styles: customStyles,
}: ProductProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, customStyles]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("ProductScreen", {
            product,
          })
        }
      >
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        {insideWishlist ? (
          <AntDesign
            name="delete"
            size={25}
            color="#402661"
            style={styles.favoriteIcon}
          />
        ) : (
          <AntDesign
            // TODO: Change wishlist logic
            name={product.inWishlist ? "heart" : "hearto"}
            size={25}
            color="#402661"
            style={styles.favoriteIcon}
          />
        )}
        <View style={styles.details}>
          <Text style={styles.categoryName}>{product.category}</Text>
          <Text style={styles.name}>
            {product.title} {product.weight}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.price}>${product.price}</Text>
        {product.inStock ? (
          <Button
            text="Add to Bag"
            buttonDimensions={{
              button: {
                width: 100,
              },
            }}
            onPressFn={() => {
              console.log("Added to bag!");
            }}
          />
        ) : (
          <OutOfStockButton />
        )}
      </View>
    </View>
  );
};

export default Product;
