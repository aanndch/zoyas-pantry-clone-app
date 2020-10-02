import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import QuantitySelector from "../../components/QuantitySelector";
import Button from "../../components/Button";

interface ProductScreenProps {
  route: any;
}

const ProductScreen = ({ route }: ProductScreenProps) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <AntDesign
        name={product.inWishlist ? "heart" : "hearto"}
        size={18}
        color="#402661"
        style={styles.favoriteIcon}
      />
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.price}</Text>
          <QuantitySelector />
        </View>
        <Button
          width={150}
          text="Add to Bag"
          onPressFn={() => {}}
          styles={{ alignSelf: "flex-end" }}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
