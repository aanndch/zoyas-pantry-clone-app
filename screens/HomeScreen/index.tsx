import React from "react";
import { Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";

import Button from "../../components/Button";
import { HomeStackParamList } from "../../types";
import styles from "./styles";

interface HomeScreenProps {
  navigation: StackNavigationProp<HomeStackParamList>;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.banner}>
      <Image
        source={{ uri: "https://i.imgur.com/zHh95Hx.png" }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>
          Your one stop to&nbsp;
          <Text style={styles.textBold}>healthy & organic</Text> online store
        </Text>
        <Text style={styles.text}>
          From local products to fresh produce, our expert team members will
          help you with the groceries you know and love.
        </Text>
      </View>
      <Button
        text="Explore the range"
        onPressFn={() => navigation.navigate("ProductsScreen")}
        width={175}
      />
    </View>
  </SafeAreaView>
);

export default HomeScreen;
