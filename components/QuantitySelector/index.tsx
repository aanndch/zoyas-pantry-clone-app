import React, { useState } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";

import { Entypo } from "@expo/vector-icons";

import COLORS from "../../colors";
import styles from "./styles";

interface QuantitySelectorProps {
  styles?: Object;
  quantity: number;
  iconSize?: number;
  quantityStyles?: Object;
  setQuantity: (number: number) => void;
}

const QuantitySelector = ({
  styles: customStyles,
  quantity,
  setQuantity,
  iconSize = 20,
  quantityStyles,
}: QuantitySelectorProps) => {
  const setQuantityFromInput = (input: string) => {
    if (input === "") return setQuantity(1);

    const number = parseInt(input.replace(/[^0-9]/g, ""));

    setQuantity(number);
  };

  return (
    <View style={[styles.quantitySelector, customStyles]}>
      <TouchableOpacity
        onPress={() => setQuantity(quantity - 1)}
        activeOpacity={0.8}
        disabled={quantity <= 1}
        style={styles.minusButton}
      >
        <Entypo
          name="minus"
          size={iconSize}
          color={quantity <= 1 ? COLORS.lightgreen : COLORS.green}
        />
      </TouchableOpacity>
      <TextInput
        value={`${quantity}`}
        keyboardType="number-pad"
        style={[styles.quantity, quantityStyles]}
        onChangeText={(input) => setQuantityFromInput(input)}
      />
      <TouchableOpacity
        onPress={() => setQuantity(quantity + 1)}
        activeOpacity={0.8}
        style={styles.plusButton}
      >
        <Entypo name="plus" size={iconSize} color={COLORS.green} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
