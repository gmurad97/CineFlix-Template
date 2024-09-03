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
        }
    }
});

export const getMovieById = (state, movieId) => {
    return state.movies.movies.find(movie => movie.id === movieId);
}

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;