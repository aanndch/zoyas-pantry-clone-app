import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix, useTiming } from "react-native-redash";

import FilterItem from "./FilterItem";
import { filters } from "../../data";
import styles from "./styles";

interface FilterProps {}

const Filter = (props: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const transition = useTiming(isOpen);
  let [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({});
  const animatedStyle = useAnimatedStyle(() => ({
    height: mix(transition.value, 0, 6 * 51.3)
  }));

  const addFilter = (name: string, selectedFilter: string) => {
    const updatedFilters = { ...selectedFilters };

    if (updatedFilters[name] === selectedFilter) {
      delete updatedFilters[name];
    } else {
      updatedFilters[name] = selectedFilter;
    }

    setSelectedFilters(updatedFilters);
  };

  const removeFilter = (filter: string) => {
    const updatedFilters = { ...selectedFilters };

    delete updatedFilters[filter];

    setSelectedFilters(updatedFilters);
  };

  const clearFilters = () => setSelectedFilters({});

  const FilterTags = (
    <View style={styles.filterFooter}>
      <View style={styles.filterTags}>
        {Object.entries(selectedFilters).map(([name, selectedFilter]) => (
          <TouchableOpacity
            style={styles.filterTag}
            onPress={() => removeFilter(name)}
            key={selectedFilter}
          >
            <Text style={styles.filterTagText}>{selectedFilter}</Text>
            <AntDesign name="close" size={15} style={styles.filterTagIcon} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => clearFilters()}
        activeOpacity={0.7}
        style={styles.clearAllButton}
      >
        <Text style={styles.clearAll}>Clear all</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <>
            <AntDesign name="check" size={20} color="#ffffff" />
            <Text style={styles.headingText}>Done</Text>
          </>
        ) : (
          <>
            <AntDesign name="filter" size={20} color="#ffffff" />
            <Text style={styles.headingText}>Filter</Text>
          </>
        )}
      </TouchableOpacity>
      <Animated.View style={[styles.filters, animatedStyle]}>
        <FlatList
          data={Object.keys(filters)}
          renderItem={({ item, index }: { item: string; index: number }) => (
            <FilterItem
              curr={index}
              name={item}
              noOfFilters={Object.keys(filters).length}
              options={filters[item]}
              selectedFilters={Object.values(selectedFilters)}
              addFilter={addFilter}
              key={item}
            />
          )}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            Object.values(selectedFilters).length > 0 ? FilterTags : <View />
          }
        />
      </Animated.View>
    </View>
  );
};

export default Filter;
