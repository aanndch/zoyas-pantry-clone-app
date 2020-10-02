import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

interface FilterProps {
  name: string;
  options: string[];
  curr: number;
  noOfFilters: number;
}

const FilterItem = ({ name, options, curr, noOfFilters }: FilterProps) => {
  const isLast = curr === noOfFilters - 1 ? true : false;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[styles.container, isLast && { borderBottomWidth: 0 }]}>
      <TouchableOpacity
        style={styles.filter}
        activeOpacity={0.8}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.text}>{name}</Text>
        <Entypo name={isOpen ? "chevron-up" : "chevron-down"} size={20} />
      </TouchableOpacity>
      {isOpen &&
        options.map((option, i) => (
          <View key={i} style={styles.option}>
            <Text style={styles.optionText}>{option}</Text>
          </View>
        ))}
    </View>
  );
};

export default FilterItem;
