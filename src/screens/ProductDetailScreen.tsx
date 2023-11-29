import React, { useCallback } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { addToCart, toggleFavorites } from "../store/product/productSlice";
import { IProductDetailScreenProps } from "@/models/navigation";
import { currencyFormatter, deviceHeight } from "../utils/utils";
import BottomActions from "../components/BottomActions";
import FavoriteButton from "../components/FavoriteButton";

const ProductDetailScreen: React.FC<IProductDetailScreenProps> = ({
  route,
}) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state?.product);
  const { name, price, description, image } = route.params.item;

  const handleToggleFavorite = () => {
    dispatch(toggleFavorites(route.params.item));
  };

  const getIsFavorite = useCallback(() => {
    return Boolean(
      favorites.filter((item) => item.id === route.params.item.id)[0],
    );
  }, [favorites]);

  return (
    <Layout goBack headerText={name}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.title}>{name}</Text>
          <ScrollView>
            <Text>
              {description}
              {description}
            </Text>
          </ScrollView>
        </View>
        <BottomActions
          onPress={() => dispatch(addToCart(route.params.item))}
          price={currencyFormatter.format(price)}
          buttonLabel="Add to Cart"
        />
        <FavoriteButton
          testID="favorite-button"
          onPress={handleToggleFavorite}
          isFavorite={getIsFavorite()}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    margin: 20,
  },
  image: {
    width: "100%",
    height: deviceHeight * 0.2,
    marginBottom: 20,
  },
  top: {
    position: "relative",
    flex: 1,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonLabel: {
    color: "white",
  },
  price: { fontWeight: "bold" },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ProductDetailScreen;
