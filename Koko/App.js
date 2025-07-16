import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView, View, Button } from "react-native";
import HomeScreen from "./component/screens/HomeScreen";
import ProductDetail from "./component/screens/ProductDetail";
import CartScreen from "./component/screens/CartScreen";
import { CartProvider } from "./component/context/CartContext";

const Stack = createNativeStackNavigator();

function HeaderButtons() {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonContainer}>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <HeaderButtons />
        </SafeAreaView>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product Detail" component={ProductDetail} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0, // SafeAreaView handles the status bar space
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 10,
});
