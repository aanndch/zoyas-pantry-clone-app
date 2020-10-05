import * as React from "react";
import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import Image from "react-native-remote-svg";

import HomeScreen from "../screens/HomeScreen";
// import NewInScreen from "../screens/NewInScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductScreen from "../screens/ProductScreen";
import CustomDrawer from "../components/CustomDrawer";
import TotalCartItems from "../components/TotalCartItems";
import {
  HomeStackParamList,
  DrawerParamList,
  WishlistStackParamList,
  CartStackParamList,
} from "../types";
import WishlistScreen from "../screens/WishlistScreen";
import CartScreen from "../screens/CartScreen";

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
      <Drawer.Screen name="NewIn" component={HomeStack} />
      <Drawer.Screen name="BestSellers" component={HomeStack} />
      <Drawer.Screen name="Pantry" component={HomeStack} />
      <Drawer.Screen name="WholeFoods" component={HomeStack} />
      <Drawer.Screen name="Favorites" component={WishlistStack} />
      <Drawer.Screen name="Login" component={HomeStack} />
      <Drawer.Screen name="Cart" component={CartStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

interface HomeStackProps {
  navigation: DrawerNavigationProp<HomeStackParamList>;
}

interface WishlistStackProps {
  navigation: DrawerNavigationProp<WishlistStackParamList>;
}

interface CartStackProps {
  navigation: DrawerNavigationProp<CartStackParamList>;
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
            uri: `https://zoyaspantry.com.au/wp-content/themes/zoyas-pantry/assets/images/Logo.svg`,
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
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
  </Stack.Navigator>
);

const WishlistStack = ({ navigation }: WishlistStackProps) => (
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
            uri: `https://zoyaspantry.com.au/wp-content/themes/zoyas-pantry/assets/images/Logo.svg`,
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
    <Stack.Screen name="Favorites" component={WishlistScreen} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} />
  </Stack.Navigator>
);

const CartStack = ({ navigation }: CartStackProps) => (
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
            uri: `https://zoyaspantry.com.au/wp-content/themes/zoyas-pantry/assets/images/Logo.svg`,
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
    <Stack.Screen name="Cart" component={CartScreen} />
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
