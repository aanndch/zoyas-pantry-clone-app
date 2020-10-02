import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

interface QuantitySelectorProps {
  styles?: Object;
}

const QuantitySelector = ({ styles: customStyles }: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <View style={[styles.quantitySelector, customStyles]}>
      <TouchableOpacity
        onPress={() => setQuantity(quantity - 1)}
        activeOpacity={0.6}
        disabled={quantity <= 1}
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
  );
};

export default QuantitySelector;
