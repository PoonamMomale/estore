import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions";

const initialState = {
    products: [],
    status: 'idle',
    error: ""
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        filterProducts: (state,action) =>{
            const filteredData = action.payload.products.filter((ele)=>{
                return ele.category_id === parseInt(action.payload.selectedSubCategory.parent_category_id);
            });

            state.products = filteredData;
            console.log(filteredData);
        },
        filterByPrice: (state,action) =>{
            const filteredData = action.payload.products.filter((ele)=>{
                return ele.price >= action.payload.minPriceLimit && ele.price <= action.payload.maxPriceLimit
            });

            state.products = filteredData;
            // console.log(action.payload);
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(getProducts.pending, (state,action)=>{
            state.status = 'loading..';
        })
        .addCase(getProducts.fulfilled, (state,action)=>{
            state.status = 'success';
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state,action)=>{
            state.status = 'error';
            state.error = action.error.message;
        })
    }
});

export const { filterProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;