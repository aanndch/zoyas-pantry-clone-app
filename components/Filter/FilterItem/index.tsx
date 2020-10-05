import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";
import { add } from "react-native-reanimated";

interface FilterProps {
  name: string;
  options: string[];
  curr: number;
  noOfFilters: number;
  addFilter: (oldFilter: string, newFilter: string) => void;
}

const FilterItem = ({
  name,
  options,
  curr,
  noOfFilters,
  addFilter,
}: FilterProps) => {
  const isLast = curr === noOfFilters - 1 ? true : false;

  const [isOpen, setIsOpen] = useState(false);
  const [currFilter, setCurrFilter] = useState("");

  const replaceFilter = (newFilter: string) => {
    addFilter(currFilter, newFilter);

    setCurrFilter(newFilter);
  };

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
        options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => replaceFilter(option)}
            style={styles.option}
            activeOpacity={0.7}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default FilterItem;
