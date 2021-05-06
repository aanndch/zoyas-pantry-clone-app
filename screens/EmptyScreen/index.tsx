import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";
import styles from "./styles";

interface EmptyScreenProps {
  heading: string;
  inWishlist: boolean;
}

const EmptyScreen = ({ heading, inWishlist }: EmptyScreenProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.emptyCartContainer}>
      <Image
        source={{ uri: "https://i.imgur.com/Pj0tMig.png" }}
        style={styles.image}
      />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subheading}>
        Looks like you haven't made your choice yet.
      </Text>
      <Text style={styles.subheading}>Start adding items!</Text>
      <Button
        text="Explore the range"
        buttonDimensions={{
          button: {
            width: 175,
          },
        }}
        onPressFn={() => navigation.navigate("ProductsScreen")}
        style={{ marginTop: 30 }}
      />
    </View>
  );
};

export default EmptyScreen;
