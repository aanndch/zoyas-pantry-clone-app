import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

interface FilterProps {
  curr: number;
  name: string;
  noOfFilters: number;
  options: string[];
  selectedFilters: string[];
  addFilter: (name: string, selectedFilter: string) => void;
}

const FilterItem = ({
  name,
  options,
  curr,
  noOfFilters,
  addFilter,
  selectedFilters,
}: FilterProps) => {
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
        options.map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => addFilter(name, option)}
            style={styles.option}
            activeOpacity={0.7}
          >
            <Text
              style={
                selectedFilters.includes(option)
                  ? styles.selectedOptionText
                  : styles.optionText
              }
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default FilterItem;
