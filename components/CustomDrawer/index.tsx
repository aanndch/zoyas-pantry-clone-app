import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props: Object) => (
  <SafeAreaView style={styles.container}>
    {/* <DrawerContentScrollView {...props}> */}
    <DrawerItem
      label="New in"
      onPress={() => {}}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemTextTeal}
    />
    <DrawerItem
      label="Best sellers"
      onPress={() => {}}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemTextTeal}
    />
    <DrawerItem
      label="Pantry"
      onPress={() => {}}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemText}
    />
    <DrawerItem
      label="Whole Foods"
      onPress={() => {}}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemText}
    />
    <DrawerItem
      label="Favorites"
      onPress={() => {}}
      icon={() => (
        <AntDesign name="hearto" size={25} style={styles.drawerItemIconHeart} />
      )}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemTextSpecific}
    />
    <DrawerItem
      label="Login"
      onPress={() => {}}
      icon={() => (
        <Ionicons
          name="md-happy"
          size={25}
          style={styles.drawerItemIconSmiley}
        />
      )}
      style={styles.drawerItem}
      labelStyle={styles.drawerItemTextSpecific}
    />
    {/* </DrawerContentScrollView> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get("window").height * 0.2,
  },
  drawerItem: {
    marginVertical: 10,
    // backgroundColor: "blue",
  },
  drawerItemTextTeal: {
    width: "110%",
    // backgroundColor: "red",
    textAlign: "center",
    color: "#17aba6",
    fontSize: 16,
    fontFamily: "PTSans_700Bold",
  },
  drawerItemText: {
    width: "110%",
    // backgroundColor: "red",
    textAlign: "center",
    color: "#212629",
    fontSize: 16,
    fontFamily: "PTSans_700Bold",
  },
  drawerItemTextSpecific: {
    // backgroundColor: "red",
    color: "#212629",
    fontSize: 16,
    fontFamily: "PTSans_700Bold",
  },
  drawerItemIconHeart: {
    marginLeft: Dimensions.get("window").width * 0.2,
  },
  drawerItemIconSmiley: {
    marginLeft: Dimensions.get("window").width * 0.245,
  },
});

export default CustomDrawer;
