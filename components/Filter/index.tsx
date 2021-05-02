import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import FilterItem from "./FilterItem";
import { filters } from "../../data";
import styles from "./styles";

interface FilterProps {}

const Filter = (props: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  let [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const addFilter = (oldFilter: string, newFilter: string) => {
    let updatedFilters = [...selectedFilters];

    if (oldFilter === newFilter) {
      if (updatedFilters.includes(newFilter)) {
        removeFilter(newFilter);
      } else {
        updatedFilters = [...updatedFilters, newFilter];
        setSelectedFilters(updatedFilters);
      }

      return;
    }

    if (selectedFilters.includes(newFilter)) {
      updatedFilters = updatedFilters.filter((f) => f !== newFilter);
    } else {
      updatedFilters = [...updatedFilters, newFilter];
    }

    if (updatedFilters.includes(oldFilter)) {
      updatedFilters = updatedFilters.filter((f) => f !== oldFilter);
    }

    setSelectedFilters(updatedFilters);
  };

  const removeFilter = (filter: string) =>
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));

  const clearFilters = () => setSelectedFilters([]);

  const FilterTags = (
    <View style={styles.filterFooter}>
      <View style={styles.filterTags}>
        {selectedFilters.map((filter) => (
          <TouchableOpacity
            style={styles.filterTag}
            onPress={() => removeFilter(filter)}
            key={filter}
          >
            <Text style={styles.filterTagText}>{filter}</Text>
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
      <FlatList
        data={Object.keys(filters)}
        renderItem={({ item, index }: { item: string; index: number }) => (
          <FilterItem
            curr={index}
            name={item}
            noOfFilters={Object.keys(filters).length}
            options={filters[item]}
            selectedFilters={selectedFilters}
            addFilter={addFilter}
            key={item}
          />
        )}
        style={isOpen ? styles.filters : styles.hideFilters}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={selectedFilters.length > 0 ? FilterTags : <View />}
      />
    </View>
  );
};

export default Filter;
