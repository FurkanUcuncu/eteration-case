import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productServices from '../../services/product';
import { ICart, IFavorite, IProductCard } from '../../models/product';
import { RootState } from '..';

export const getProductList = createAsyncThunk('productList', async () => {
  const response = await productServices.products();
  return response;
});

const initialState: {
  allProducts: IProductCard[];
  products: IProductCard[];
  cart: ICart[];
  favorites: IFavorite[];
  isLoading: boolean;
} = {
  allProducts: [],
  products: [],
  cart: [],
  isLoading: true,
  favorites: []
};

export const getProductState = (state: RootState) => state?.product;

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    searchProductList(state, action) {
      state.products = state.allProducts.filter(item => item.name.includes(action.payload));
      state.isLoading = false;
    },
    addToCart(state, action) {
      if (state.cart.filter(item => item.name === action.payload.name).length > 0) {
        state.cart = state.cart.map((item) => {
          return item.name === action.payload.name ? { ...item, quantity: item.quantity + 1 } : item;
        })
        return
      }
      state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
    },
    subtractFromCart(state, action) {
      if (action.payload.quantity > 1) {
        state.cart = state.cart.map((item) => {
          return item.name === action.payload.name ? { ...item, quantity: item.quantity - 1 } : item;
        })
        return
      }
      state.cart = state.cart.filter(item => item.name !== action.payload.name);
    },
    toggleFavorites(state, action) {
      if (state.favorites.filter(item => item.id === action.payload.id).length > 0) {
        state.favorites = state.favorites.filter((item) => item.id !== action.payload.id)
        return
      }
      state.favorites = [...state.favorites, action.payload]
    },
    filterProducts(state, { payload }) {
      const { minPrice, maxPrice, model } = payload

      const parsedMinPrice = parseInt(minPrice);
      const parsedMaxPrice = parseInt(maxPrice);

      if (model !== "All") {
        state.products = state.products.filter((item) => item.model === model)
        return
      }
      else state.products = state.allProducts
      if (minPrice !== "") {
        state.products = state.products.filter((item) => item.price > parsedMinPrice)
      }
      if (maxPrice !== "") {
        state.products = state.products.filter((item) => item.price < parsedMaxPrice)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.products = action?.payload?.data;
      state.allProducts = action?.payload?.data;
      state.isLoading = false;
    });
  },
});

export const { stopLoading, startLoading, searchProductList, addToCart, subtractFromCart, toggleFavorites, filterProducts } = productSlice.actions;
