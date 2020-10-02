import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ProductType } from "../../types";
import QuantitySelector from "../QuantitySelector";
import styles from "./styles";

interface CartItemProps {
  item: ProductType;
  curr: number;
  noOfItemsInCart: number;
}

const CartItem = ({ item, curr, noOfItemsInCart }: CartItemProps) => {
  const isLastItem = curr + 1 === noOfItemsInCart;

  return (
    <View
      style={[
        styles.container,
        isLastItem && {
          borderBottomWidth: 0.5,
          borderBottomColor: "#b5b5b5",
        },
      ]}
    >
      <View style={styles.details}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.heading}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>${item.price}</Text>
        <QuantitySelector styles={{ width: 120, height: 35 }} />
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.actionText}>Add to Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
