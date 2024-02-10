import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice"
// import AuthReducer from "./slices/AuthSlice"
import counterReducer from "./slices/CountSlice"
// import userReducer from './slices/AuthSlice';
const store = configureStore({
    reducer: {
        product: ProductReducer,
        // user: userReducer,
        counter:  counterReducer,
    }
})

export default store
