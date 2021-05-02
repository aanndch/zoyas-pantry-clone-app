import { AntDesign, Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerParamList } from "../../types";
import DrawerItem from "./DrawerItem";
import styles from "./styles";

interface CustomDrawerProps {
  navigation: DrawerNavigationProp<DrawerParamList>;
}

const CustomDrawer = ({ navigation }: CustomDrawerProps) => (
  <SafeAreaView style={styles.container}>
    <AntDesign
      name="close"
      size={30}
      style={styles.closeIcon}
      onPress={() => navigation.closeDrawer()}
    />
    <DrawerItem title="New in" navigation={navigation} destination="Home" />
    <DrawerItem
      title="Best sellers"
      navigation={navigation}
      destination="Home"
    />
    <DrawerItem title="Pantry" navigation={navigation} destination="Home" />
    <DrawerItem
      title="Whole foods"
      navigation={navigation}
      destination="Home"
    />
    <DrawerItem
      title="Favorites"
      navigation={navigation}
      destination="Favorites"
      icon={<AntDesign name="hearto" size={25} style={styles.drawerItemIcon} />}
    />
    <DrawerItem
      title="Login"
      navigation={navigation}
      destination="Home"
      icon={
        <Ionicons name="md-happy" size={25} style={styles.drawerItemIcon} />
      }
    />
  </SafeAreaView>
);

export default CustomDrawer;
