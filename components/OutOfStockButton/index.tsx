import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const OutOfStockButton = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Out of stock</Text>
  </View>
);

export default OutOfStockButton;
