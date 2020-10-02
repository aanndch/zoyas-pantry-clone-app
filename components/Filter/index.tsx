import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import FilterItem from "./FilterItem";
import styles from "./styles";
import { filters } from "../../data";

interface FilterProps {}

const Filter = (props: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <>
            <AntDesign name="close" size={20} color="#ffffff" />
            <Text style={styles.headingText}>Close</Text>
          </>
        ) : (
          <>
            <AntDesign name="filter" size={20} color="#ffffff" />
            <Text style={styles.headingText}>Filter</Text>
          </>
        )}
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={filters}
          renderItem={({ item, index }) => (
            <FilterItem
              curr={index}
              name={item.name}
              noOfFilters={filters.length}
              options={item.options}
              key={item.id}
            />
          )}
          style={styles.filters}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Filter;
