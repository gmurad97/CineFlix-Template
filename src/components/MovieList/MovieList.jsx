import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";
import TMDB from "../../services/api/TMDB.js";
import { setMovies } from "../../store/slices/moviesSlice.js";
import MovieItem from "./components/MovieItem/MovieItem.jsx";

const MovieList = () => {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        TMDB.getPopularMovies().then(movies => dispatch(setMovies(movies)));
    }, [dispatch]);

    return (
        <div className="movie__list">
            {movies.map((movie, idx) => (
                <MovieItem movieData={movie} key={idx} />
            ))}
        </div>
    );
}

export default MovieList;