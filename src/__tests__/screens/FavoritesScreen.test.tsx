import React from "react";
import FavoritesScreen from "../../screens/FavoritesScreen";
import { renderWithProviders } from "../../utils/test-util";
import { mockFavorites } from "../../utils/dummyData";
import { store } from "../../store";
import {
  productSlice,
  toggleFavorites,
} from "../../store/product/productSlice";
import { fireEvent, screen } from "@testing-library/react-native";

const initialStateRedux = {
  product: {
    cart: [],
    products: [],
    allProducts: [],
    favorites: mockFavorites,
    isLoading: false,
  },
};

describe("FavoritesScreen component Test", () => {
  it("FavoritesScreen render", () => {
    renderWithProviders(<FavoritesScreen />, {
      preloadedState: {
        ...initialStateRedux,
      },
    });
  });

  it("Add an item to favorites from store", async () => {
    await store.dispatch(toggleFavorites(mockFavorites[0]));

    renderWithProviders(<FavoritesScreen />, { store });

    const action = {
      type: toggleFavorites,
      payload: mockFavorites[0],
    };

    const state = productSlice.reducer(initialStateRedux.product, action);
    expect(state).toEqual({
      products: [],
      allProducts: [],
      cart: [],
      favorites: [],
      isLoading: false,
    });
  });

  it("Click remove favorite button", async () => {
    renderWithProviders(<FavoritesScreen />, { store });
    let removeFavoriteButton = screen.getByTestId("remove-favorite-button");
    fireEvent.press(removeFavoriteButton);
  });
});
