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
        getMovie: (state, action) => {
            //find and get from state action.id movies
        }
    }
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;