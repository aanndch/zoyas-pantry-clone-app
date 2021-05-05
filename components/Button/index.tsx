import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

interface ButtonProps {
  text: string;
  buttonDimensions: {
    button: Object;
    shadow?: Object;
  };
  onPressFn: () => void;
  style?: Object;
  fontSize?: number;
}

const Button = ({
  text,
  onPressFn,
  buttonDimensions: { button, shadow },
  style: customStyles,
  fontSize,
}: ButtonProps) => {
  return (
    <View style={customStyles}>
      <TouchableOpacity
        onPress={onPressFn}
        activeOpacity={0.8}
        style={[styles.button, button]}
      >
        <Text
          style={[
            styles.buttonText,
            {
              fontSize,
            },
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
      <View style={[styles.buttonShadow, button, shadow]}></View>
    </View>
  );
};

export default Button;
