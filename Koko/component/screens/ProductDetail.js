import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView, Image, Button } from "react-native";
import { useCart } from "../context/CartContext";

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>Rating: {product.rating?.rate} / 5</Text>
      <Button
        title="Proceed to Cart"
        onPress={() => {
          addToCart(product);
          navigation.navigate("Cart");
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: "100%", height: 300, resizeMode: "contain" },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  price: { fontSize: 16, marginBottom: 5 },
  category: { fontStyle: "italic", marginBottom: 10 },
  description: { marginBottom: 10 },
  rating: { marginBottom: 20 },
});
