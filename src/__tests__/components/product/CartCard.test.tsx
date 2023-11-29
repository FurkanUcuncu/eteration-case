import React from "react";
import { fireEvent, screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../../utils/test-util";
import { mockFavorites } from "../../../utils/dummyData";
import CartCard from "../../../components/product/CartCard";
import { store } from "../../../store";

const initialValues = {
  item: {
    id: "2",
    image: "test",
    name: "test",
    price: 5,
    quantity: 2,
    description: "",
  },
  actions: true,
};

const initialStateRedux = {
  product: {
    products: [],
    favorites: mockFavorites,
    cart: [],
    allProducts: [],
    isLoading: false,
  },
};

describe("CartCard component Test", () => {
  it("CartCard render", () => {
    renderWithProviders(<CartCard {...initialValues} />, { store });
  });

  it("Click Add to cart button", async () => {
    renderWithProviders(<CartCard {...initialValues} />, {
      preloadedState: { ...initialStateRedux },
    });
    let addToCartButton = screen.getByTestId("add-to-cart-button");
    fireEvent.press(addToCartButton);
  });

  it("Click Subtract from cart button", () => {
    renderWithProviders(<CartCard {...initialValues} />, { store });
    let subtractFromCartButton = screen.getByTestId(
      "subtract-from-cart-button",
    );
    fireEvent.press(subtractFromCartButton);
  });
});
