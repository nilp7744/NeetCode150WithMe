import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ color: "gray", width: "70%" }}>{item.title}</Text>
            <Text style={{ color: "black" }}>${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "right",
  },
});
