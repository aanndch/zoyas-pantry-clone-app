import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import Image from "react-native-remote-svg";
import COLORS from "../colors";
import CartScreen from "../screens/CartScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductsScreen from "../screens/ProductsScreen";
import WishlistScreen from "../screens/WishlistScreen";
import {
  CartStackParamList,
  HomeStackParamList,
  SearchStackParamList,
  TabParamList,
  WishlistStackParamList,
} from "../types";

const appBar: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    backgroundColor: COLORS.background,
  },
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
  headerTitleAlign: "center",
  headerTitle: () => (
    <Image
      source={{
        uri: `https://zoyaspantry.com.au/wp-content/themes/zoyas-pantry/assets/images/Logo.svg`,
      }}
      style={styles.logo}
    />
  ),
  headerRightContainerStyle: {
    marginRight: 20,
  }
};

const Tab = createBottomTabNavigator<TabParamList>();

const HomeStack = createStackNavigator<HomeStackParamList>();
const SearchStack = createStackNavigator<SearchStackParamList>();
const WishlistStack = createStackNavigator<WishlistStackParamList>();
const CartStack = createStackNavigator<CartStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          elevation: 10,
          borderTopWidth: 0,
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={25}
              color={focused ? COLORS.tabIconPurple : COLORS.tabIconGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={25}
              color={focused ? COLORS.tabIconPurple : COLORS.tabIconGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={25}
              color={focused ? COLORS.tabIconPurple : COLORS.tabIconGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={25}
              color={focused ? COLORS.tabIconPurple : COLORS.tabIconGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={appBar}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="ProductsScreen" component={ProductsScreen} />
    <HomeStack.Screen name="ProductScreen" component={ProductScreen} />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator screenOptions={appBar}>
    <SearchStack.Screen name="HomeScreen" component={ForgotPasswordScreen} />
    <SearchStack.Screen name="ProductsScreen" component={ProductsScreen} />
    <SearchStack.Screen name="ProductScreen" component={ProductScreen} />
  </SearchStack.Navigator>
);

const WishlistStackScreen = () => (
  <WishlistStack.Navigator screenOptions={appBar}>
    <WishlistStack.Screen name="WishlistScreen" component={WishlistScreen} />
    <WishlistStack.Screen name="ProductScreen" component={ProductScreen} />
  </WishlistStack.Navigator>
);

const CartStackScreen = () => (
  <CartStack.Navigator screenOptions={appBar}>
    <CartStack.Screen name="CartScreen" component={CartScreen} />
    <CartStack.Screen name="ProductScreen" component={ProductScreen} />
  </CartStack.Navigator>
);

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 75,
    resizeMode: "contain",
  },
});

export default Navigation;
