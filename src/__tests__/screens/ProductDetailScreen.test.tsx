import React from "react";
import ProductDetailScreen from "../../screens/ProductDetailScreen";
import { renderWithProviders } from "../../utils/test-util";
import { mockFavorites } from "../../utils/dummyData";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../models/navigation";
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

const mockRoute: RouteProp<RootStackParamList, "ProductDetailScreen"> = {
  key: "mock-route-key",
  name: "ProductDetailScreen",
  params: {
    item: {
      id: "1",
      image: "test",
      name: "Bentley Focus",
      description: "Quasi",
      price: 51,
      isFavorite: false,
      model: "test",
    },
  },
};

const mockNavigation = {
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  dispatch: jest.fn(),
  getId: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  jumpTo: jest.fn(),
  navigate: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
  reset: jest.fn(),
  setOptions: jest.fn(),
  setParams: jest.fn(),
};

describe("ProductDetailScreen component Test", () => {
  it("ProductDetailScreen render", () => {
    renderWithProviders(
      <ProductDetailScreen route={mockRoute} navigation={mockNavigation} />,
      {
        preloadedState: {
          ...initialStateRedux,
        },
      },
    );
  });

  it("Click add to cart button", () => {
    renderWithProviders(
      <ProductDetailScreen route={mockRoute} navigation={mockNavigation} />,
      {
        preloadedState: {
          ...initialStateRedux,
        },
      },
    );

    let addToCartButton = screen.getByTestId("action-button");
    fireEvent.press(addToCartButton);
  });

  it("Click favorite button", () => {
    renderWithProviders(
      <ProductDetailScreen route={mockRoute} navigation={mockNavigation} />,
      {
        preloadedState: {
          ...initialStateRedux,
        },
      },
    );

    let favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.press(favoriteButton);
  });
});
