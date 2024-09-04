import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MovieList.css";
import MovieItem from "./components/MovieItem/MovieItem.jsx";
import TMDB from "../../services/api/TMDB.js";
import { setMovies } from "../../store/slices/moviesSlice.js";

const MovieList = () => {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    const movieListEndMark = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            TMDB.getPopularMovies(currentPage)
                .then(newMovies => {
                    dispatch(setMovies(newMovies));
                    setIsLoading(false);
                })
                .catch(() => setIsLoading(false));
        }
    }, [currentPage, isLoading, dispatch]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isLoading) {
                    setIsLoading(true);
                    setCurrentPage(prevPage => prevPage + 1);
                }
            });
        }, {
            threshold: 0.1
        });

        if (movieListEndMark.current) {
            observer.observe(movieListEndMark.current);
        }

        return () => {
            if (movieListEndMark.current) {
                observer.unobserve(movieListEndMark.current);
            }
            observer.disconnect();
        };
    }, [isLoading]);

    return (
        <>
            <div className="movie__list">
                {movies.map((movie, idx) => (
                    <MovieItem
                        movieData={movie}
                        key={idx}
                    />
                ))}
            </div>
            <div ref={movieListEndMark}></div>
            {isLoading && (
                <div className="movie__loading">
                    <div className="movie__loading-item"></div>
                    <div className="movie__loading-item"></div>
                    <div className="movie__loading-item"></div>
                    <div className="movie__loading-item"></div>
                    <div className="movie__loading-item"></div>
                </div>
            )}
        </>
    );
}

export default MovieList;
