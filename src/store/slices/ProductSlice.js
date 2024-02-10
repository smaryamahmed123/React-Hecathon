import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


 export const fetchData = createAsyncThunk("products/fetch", async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');

    console.log('response', response.data.products  )
    return response.data.products;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  )

const initialState = {
    allProducts: [],
    isLoading: false,
    error: "",  
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
          state.isLoading = true;
          console.log("pending");
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.allProducts = action.payload;
          console.log("fulfilled");
        });
        builder.addCase(fetchData.rejected, (state) => {
          state.isLoading = false;
          state.allProducts = [];
          state.error = true;
          console.log("rejected");
        });
      },
})
// action.error.message;


  const { actions, reducer } = productSlice;
export default reducer;
