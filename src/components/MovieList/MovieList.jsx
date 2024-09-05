import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";
import MovieItem from "./components/MovieItem/MovieItem.jsx";
import TMDB from "../../services/api/TMDB.js";
import { addMovies } from "../../store/slices/moviesSlice.js";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.jsx";

const MovieList = () => {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    const observedRef = useRef(null);
    const [isIntersecting] = useIntersectionObserver(observedRef, { threshold: 1 });
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            TMDB.getPopularMovies(currentPage).then(newMovies => {
                dispatch(addMovies(newMovies));
                setIsLoading(false);
            });
        }
    }, [currentPage, dispatch]);

    useEffect(() => {
        if (isIntersecting && !isLoading)
            setCurrentPage(prevPage => prevPage + 1);
    }, [isIntersecting]);

    return (
        <div className="movie__container">
            <div className="movie__list">
                {movies.map((movie, idx) => (
                    <MovieItem movieData={movie} key={idx} />
                ))}
            </div>
            <div ref={observedRef} className="movie__skeletons">
                <div className="movie__skeleton"></div>
                <div className="movie__skeleton"></div>
                <div className="movie__skeleton"></div>
                <div className="movie__skeleton"></div>
                <div className="movie__skeleton"></div>
            </div>
        </div>
    );
}

export default MovieList;
