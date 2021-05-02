import * as React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Text, TouchableOpacity } from "react-native";

import { DrawerParamList } from "../../../types";
import styles from "./styles";

interface DrawerItemProps {
  title: string;
  icon?: JSX.Element;
  destination: keyof DrawerParamList;
  navigation: DrawerNavigationProp<DrawerParamList>;
}

export default ({ title, navigation, destination, icon }: DrawerItemProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={styles.drawerItem}
    onPress={() => navigation.navigate(destination)}
  >
    <Text style={styles.drawerItemText}>{title}</Text>
    {icon}
  </TouchableOpacity>
);
