import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
    categories: [],
    status: 'idle',
    error: ""
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    // extraReducers:{
    //     [getCategories.pending] : (state,action) => {
    //         state.status = 'Loading..';
    //     },
    //     [getCategories.fulfilled] : (state,action) =>{
    //         state.status = 'Success';
    //         state.categories = action.payload;
    //     },
    //     [getCategories.rejected] : (state,action) =>{
    //         state.status = 'failed';
    //         state.error = action.error.message;
    //     }
    // },
    extraReducers: (builder) =>{
        builder.addCase(getCategories.pending, (state,action) => {
            state.status = 'loading..';
        })
        .addCase(getCategories.fulfilled, (state,action) =>{
            state.status = 'success';
            state.categories = action.payload;
        })
        .addCase(getCategories.rejected, (state,action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default categorySlice.reducer;