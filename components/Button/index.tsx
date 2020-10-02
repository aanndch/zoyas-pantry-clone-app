import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

interface ButtonProps {
  text: string;
  width: number;
  onPressFn: () => void;
}

const Button = ({ text, onPressFn, width }: ButtonProps) => {
  const buttonDimensions = { width };

  return (
    <View>
      <TouchableOpacity
        onPress={onPressFn}
        activeOpacity={0.8}
        style={[styles.button, buttonDimensions]}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <View style={[styles.buttonShadow, buttonDimensions]}></View>
    </View>
  );
};

export default Button;
