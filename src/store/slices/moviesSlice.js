import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

const moviesSlice = createSlice({
    "name": "movies",
    "initialState": initialState,
    "reducers": {

    }
});

export const { } = moviesSlice.actions;
export default moviesSlice.reducer;