import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StatusCode } from "../Util/StatusCode";

const initialState ={
    allProducts : [],
    status : StatusCode.IDEL,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers : {

    },
    extraReducers : (builder) =>{

        builder.addCase(getProducts.pending, (state,action) =>{
            state.status = StatusCode.LOADING
        })

        builder.addCase(getProducts.fulfilled, (state,action) =>{
            state.allProducts = action.payload;
            state.status = StatusCode.IDEL
        })

        builder.addCase(getProducts.rejected, (state,action) =>{
            state.status = StatusCode.ERROR
        })
    }
})


export const getProducts = createAsyncThunk('products/get', async() =>{
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    return result;   
});

export default productSlice.reducer;
