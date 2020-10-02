import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import styles from "./styles";
import Button from "../../components/Button";

interface ProductScreenProps {
  route: any;
}

const ProductScreen = ({ route }: ProductScreenProps) => {
  const { product } = route.params;

  const [quantity, setQuantity] = useState<number>(0);

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
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.price}</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity
              onPress={() => setQuantity(quantity - 1)}
              activeOpacity={0.6}
              disabled={quantity < 1}
            >
              <Entypo name="minus" size={20} color="#17aba6" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              activeOpacity={0.6}
            >
              <Entypo name="plus" size={20} color="#17aba6" />
            </TouchableOpacity>
          </View>
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
