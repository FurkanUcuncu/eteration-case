import React from "react";
import SearchBar from "../../components/SearchBar";
import { renderWithProviders } from "../../utils/test-util";
import { store } from "../../store";
import { fireEvent, screen } from "@testing-library/react-native";

describe("SearchBar component Test", () => {
  it("SearchBar render", () => {
    renderWithProviders(<SearchBar />, { store });
  });

  it("Searches for a product", () => {
    jest.useFakeTimers();
    renderWithProviders(<SearchBar />, { store });

    let searchInput = screen.getByTestId("search-input");
    fireEvent.changeText(searchInput);

    jest.runAllTimers();
  });
});
