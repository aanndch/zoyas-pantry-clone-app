import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  // DrawerContentScrollView,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { DrawerParamList } from "../../types";
import styles from "./styles";

interface customDrawerProps {
  navigation: DrawerNavigationProp<DrawerParamList>;
}

const CustomDrawer = ({ navigation }: customDrawerProps) => (
  <SafeAreaView style={styles.container}>
    {/* <DrawerContentScrollView {...props}> */}
    <AntDesign
      name="close"
      size={30}
      style={styles.closeIcon}
      onPress={() => navigation.closeDrawer()}
    />
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemTextTeal}>New in</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemTextTeal}>Best sellers</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Pantry</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Whole foods</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Favorites</Text>
      <AntDesign name="hearto" size={25} style={styles.drawerItemIcon} />
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Login</Text>
      <Ionicons name="md-happy" size={25} style={styles.drawerItemIcon} />
    </TouchableOpacity>
    {/* </DrawerContentScrollView> */}
  </SafeAreaView>
);

export default CustomDrawer;
