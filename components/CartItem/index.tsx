import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ProductType } from "../../types";
import QuantitySelector from "../QuantitySelector";
import styles from "./styles";
import COLORS from "../../colors";

interface CartItemProps {
  item: ProductType;
}

const CartItem = ({ item }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = item.price * quantity;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={styles.favoriteIcon}
      >
        <AntDesign name="hearto" size={15} color={COLORS.iconPurple} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.8}
        style={styles.deleteIcon}
      >
        <AntDesign name="delete" size={15} color={COLORS.iconPurple} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <View style={styles.heading}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.weight}>{item.weight}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
            <QuantitySelector
              styles={{ width: 70, height: 25 }}
              iconSize={15}
              quantityStyles={{ fontSize: 13 }}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
