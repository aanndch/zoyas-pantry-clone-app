import * as React from "react";
import { Image, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import NewInScreen from "../screens/NewInScreen";
import ProductsScreen from "../screens/ProductsScreen";
import CustomDrawer from "../components/CustomDrawer";
import TotalCartItems from "../components/TotalCartItems";
import { HomeStackParamList, DrawerParamList } from "../types";

const Drawer = createDrawerNavigator<DrawerParamList>();

const Stack = createStackNavigator<HomeStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      drawerStyle={{ width: "100%" }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="NewIn" component={HomeScreen} />
      <Drawer.Screen name="BestSellers" component={HomeScreen} />
      <Drawer.Screen name="Pantry" component={HomeScreen} />
      <Drawer.Screen name="WholeFoods" component={HomeScreen} />
      <Drawer.Screen name="Favorites" component={HomeScreen} />
      <Drawer.Screen name="Login" component={HomeScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

interface HomeStackProps {
  navigation: DrawerNavigationProp<HomeStackParamList>;
}

const HomeStack = ({ navigation }: HomeStackProps) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        elevation: 0,
        backgroundColor: "#fafafa",
      },
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
      headerLeft: () => (
        <Feather
          name="menu"
          size={35}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerTitleAlign: "center",
      headerTitle: () => (
        <Image
          source={{
            uri: `https://i.imgur.com/3QIa4mP.jpg`,
          }}
          style={styles.logo}
        />
      ),
      headerRight: () => <TotalCartItems />,
      headerRightContainerStyle: {
        marginRight: 20,
      },
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
    {/* <Stack.Screen name="ProductScreen" component={ProductScreen} /> */}
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 75,
    resizeMode: "contain",
  },
});

export default Navigation;
