import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  // DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const CustomDrawer = ({ navigation }: DrawerContentComponentProps) => (
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
      // onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemTextTeal}>Best sellers</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      // onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Pantry</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      // onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Whole foods</Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      // onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Favorites</Text>
      <AntDesign name="hearto" size={25} style={styles.drawerItemIcon} />
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.drawerItem}
      // onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.drawerItemText}>Login</Text>
      <Ionicons name="md-happy" size={25} style={styles.drawerItemIcon} />
    </TouchableOpacity>
    {/* </DrawerContentScrollView> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  drawerItem: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  drawerItemTextTeal: {
    color: "#17aba6",
    fontFamily: "PTSans_700Bold",
    fontSize: 16,
  },
  drawerItemText: {
    fontFamily: "PTSans_700Bold",
    fontSize: 16,
    color: "#212629",
  },
  drawerItemIcon: {
    marginLeft: 20,
  },
});

export default CustomDrawer;
