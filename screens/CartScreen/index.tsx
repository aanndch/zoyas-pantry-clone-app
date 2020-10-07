import React from "react";
import { View, Text, FlatList } from "react-native";

import { cart } from "../../data";
import EmptyScreen from "../EmptyScreen";
import CartItem from "../../components/CartItem";
import Button from "../../components/Button";
import styles from "./styles";

const CartScreen = () => {
  const subtotal = cart.reduce((acc, item) => item.price + acc, 0);

  const cartDisplay = (
    <View style={styles.cartContainer}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem item={item} />}
        // TODO: Change key to id after DB creation
        keyExtractor={(item) => item.title}
        ListHeaderComponent={() => (
          <Text style={styles.cartHeading}>My Bag</Text>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <>
            <View style={styles.totalContainer}>
              <View style={styles.totalTextContainer}>
                <Text style={styles.totalText}>Subtotal</Text>
                <Text style={styles.totalText}>${subtotal}</Text>
              </View>
              <View style={styles.totalTextContainer}>
                <Text style={styles.totalText}>Shipping</Text>
                <Text style={styles.totalText}>—</Text>
              </View>
              <View style={styles.totalTextContainer}>
                <Text style={styles.totalTextBold}>Total</Text>
                <Text style={styles.totalTextBold}>${subtotal}</Text>
              </View>
            </View>
            <View style={styles.checkoutButton}>
              <Button
                text="Proceed to checkout"
                width="100%"
                onPressFn={() => {}}
                styles={{ marginBottom: 30 }}
              />
            </View>
          </>
        )}
      />
    </View>
  );

  return (
    <>
      {cart.length === 0 ? (
        <EmptyScreen heading="Your Shopping Bag is Empty." inWishlist={false} />
      ) : (
        cartDisplay
      )}
    </>
  );
};

export default CartScreen;
