import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import styles from "./styles";

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
        <View style={styles.filters}>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Pantry</Text>
            <Entypo name="chevron-down" size={20} />
          </View>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Sale</Text>
            <Entypo name="chevron-down" size={20} />
          </View>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Brand</Text>
            <Entypo name="chevron-down" size={20} />
          </View>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Price</Text>
            <Entypo name="chevron-down" size={20} />
          </View>
          <View style={styles.filter}>
            <Text style={styles.filterText}>Religious Based</Text>
            <Entypo name="chevron-down" size={20} />
          </View>
          <View style={[styles.filter, { borderBottomWidth: 0 }]}>
            <Text style={styles.filterText}>Dietary</Text>
            <Entypo name="chevron-down" size={20} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Filter;
