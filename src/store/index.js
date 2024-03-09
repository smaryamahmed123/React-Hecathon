import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice"
import counterReducer from "./slices/CountSlice"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import addToCartReducer from "./slices/CartSlice"
const persistConfig = {
    key: "cart",
    storage,
  };
  
const store = configureStore({
    reducer: {
        product: ProductReducer,
        // user: userReducer,
        counter:  counterReducer,
        addToCartReducer: persistReducer(persistConfig, addToCartReducer),
    },
  });
  
  export const persistor = persistStore(store);
  export default store;
