import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from './styles';

const TotalCartItems = () => {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState<number>(0);

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{numberOfItemsInCart}</Text>
    </TouchableOpacity>
  );
};

export default TotalCartItems;
