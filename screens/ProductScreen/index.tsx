import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import Image from "react-native-remote-svg";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import QuantitySelector from "../../components/QuantitySelector";
import Button from "../../components/Button";

interface ProductScreenProps {
  route: any;
}

const ProductScreen = ({ route }: ProductScreenProps) => {
  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);

  const selectImageUrl = (category: string) => {
    let imageUrl = "";

    if (category === "Organic")
      imageUrl =
        "https://zoyaspantry.com.au/wp-content/uploads/2020/05/Zoyas-Pantry_icons-40.svg";
    else if (category === "Vegan")
      imageUrl =
        "https://zoyaspantry.com.au/wp-content/uploads/2020/05/vegan-2.svg";
    else
      imageUrl =
        "https://zoyaspantry.com.au/wp-content/uploads/2020/05/kosher.svg";

    return imageUrl;
  };

  return (
    <ScrollView style={styles.container}>
      <AntDesign
        name={product.inWishlist ? "heart" : "hearto"}
        size={18}
        color="#402661"
        style={styles.favoriteIcon}
      />
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.weight}>{product.weight}</Text>

        <Text style={styles.description}>{product.shortDescription}</Text>
        <View style={styles.metaContainer}>
          <View style={styles.meta}>
            <Text style={styles.metaHeading}>SKU:</Text>
            <Text style={styles.metaText}>{product.meta.sku}</Text>
          </View>
          <View style={styles.meta}>
            <Text style={styles.metaHeading}>Brand:</Text>
            <Text style={styles.metaText}>{product.meta.brand}</Text>
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.tags}>
            {product.tags.map((tag: string) => (
              <View key={tag} style={styles.tagInfo}>
                <Image
                  source={{
                    uri: selectImageUrl(tag),
                  }}
                  style={styles.tagImage}
                />
                <Text style={styles.tagName}>{tag}</Text>
              </View>
            ))}
          </View>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.price}</Text>
          <Button
            buttonDimensions={{
              button: {
                width: 150,
              },
            }}
            text="Add to Bag"
            onPressFn={() => {}}
            style={{ alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
