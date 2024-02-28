import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    async ()=>{
        const categories = fetch("http://localhost:5001/productCategories")
                            .then((res) => res.json());
        return categories;
    }
);