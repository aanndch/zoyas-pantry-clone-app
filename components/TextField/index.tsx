import React from "react";
import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";

export default function TextField(props: TextInputProps) {
  return <TextInput style={styles.inputField} {...props} />;
}
