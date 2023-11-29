import {
  configureStore,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { productSlice } from "./product/productSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "rooty",
  storage: AsyncStorage,
  whitelist: ["product"],
};

const reducers = combineReducers({
  product: productSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });
}

export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const store = setupStore();
export const persistor = persistStore(store);
