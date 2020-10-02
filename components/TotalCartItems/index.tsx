import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const TotalCartItems = () => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Cart")}
    >
      <Text style={styles.text}>{numberOfItemsInCart}</Text>
    </TouchableOpacity>
  );
};

export default TotalCartItems;
