import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "movies": []
};

const moviesSlice = createSlice({
    "name": "movies",
    "initialState": initialState,
    "reducers": {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        addMovies: (state, action) => {
            state.movies = [...state.movies, ...action.payload];
        }
    }
});

export const { setMovies, addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;