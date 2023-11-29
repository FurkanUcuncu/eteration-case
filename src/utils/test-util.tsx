import React from 'react';
import { render } from '@testing-library/react-native';
import type { RenderOptions } from '@testing-library/react-native';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '../store';
import { productSlice } from '../store/product/productSlice';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomSettings from '../helpers/CustomSettings';

const persistConfig = {
  key: 'rooty',
  storage: AsyncStorage,
  whitelist: ['product']
};

const reducers = combineReducers({
  product: productSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    }
  });
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
    return <PaperProvider theme={CustomSettings.theme}><Provider store={store}>{children}</Provider></PaperProvider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
