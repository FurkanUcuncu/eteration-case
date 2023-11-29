import {
  filterProducts,
  getProductList,
  productSlice,
  searchProductList,
  stopLoading,
  subtractFromCart,
} from "../../store/product/productSlice";
import { mockCart, mockProduct } from "../../utils/dummyData";
import { store } from "../../store";

const initialState = {
  products: mockProduct,
  allProducts: mockProduct,
  favorites: [],
  cart: [],
  isLoading: false,
};

describe("Product slice tests", () => {
  it("Product List call with empty data", async () => {
    const action = {
      type: getProductList.fulfilled.type,
      payload: { data: [] },
    };
    const state = productSlice.reducer(initialState, action);
    expect(state.products).toEqual([]);
  });

  it("Subtract from cart through store", async () => {
    store.dispatch(subtractFromCart(mockCart[0]));

    const action = {
      type: subtractFromCart,
      payload: mockCart[0],
    };

    const state = productSlice.reducer(initialState, action);
    expect(state.cart).toEqual([]);
  });

  it("Remove from cart through store", async () => {
    store.dispatch(subtractFromCart({ ...mockCart[0], quantity: 1 }));

    const action = {
      type: subtractFromCart,
      payload: { ...mockCart[0], quantity: 1 },
    };

    const state = productSlice.reducer(initialState, action);
    expect(state.cart).toEqual([]);
  });

  it("Stop loading call", async () => {
    store.dispatch(stopLoading());

    const action = {
      type: stopLoading,
      payload: false,
    };
    const state = productSlice.reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
  });

  it("Search product call", async () => {
    store.dispatch(searchProductList("te"));

    const action = {
      type: searchProductList,
      payload: "te",
    };
    const state = productSlice.reducer(initialState, action);

    expect(state.products).toEqual(mockProduct);
  });

  it("Filter call", async () => {
    store.dispatch(
      filterProducts({ minPrice: "3", maxPrice: "10", model: "test" }),
    );

    const action = {
      type: filterProducts,
      payload: { minPrice: "5", maxPrice: "10", model: "test" },
    };
    const state = productSlice.reducer(initialState, action);

    expect(state.products).toEqual([]);
  });
});
