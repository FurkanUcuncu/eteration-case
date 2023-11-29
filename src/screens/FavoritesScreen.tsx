import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Layout from "../components/layout/Layout";
import { useAppSelector } from "../hooks/redux-hooks";
import NoRecord from "../components/NoRecord";
import CartCard from "../components/product/CartCard";

const FavoritesScreen: React.FC = () => {
  const { favorites } = useAppSelector((state) => state?.product);

  return (
    <Layout headerText="Favorites">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.productContainer}>
          {favorites.length > 0 ? (
            favorites.map((item) => (
              <CartCard key={item.id} item={{ ...item, quantity: 1 }} />
            ))
          ) : (
            <NoRecord text="You have no favorite item" />
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    gap: 10,
    flex: 1,
  },
  scrollView: { flex: 1 },
  scrollViewContainer: {
    padding: 20,
  },
});

export default FavoritesScreen;
