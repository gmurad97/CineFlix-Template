import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MovieSingle from "../../components/MovieSingle/MovieSingle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieById, setMovies } from "../../store/slices/moviesSlice.js";
import TMDB from "../../services/api/TMDB.js";

const SinglePage = () => {
    const { movieId } = useParams();

    const dispatch = useDispatch();

    const movieData = useSelector(state => getMovieById(state, parseInt(movieId)));

    useEffect(() => {
        if (!movieData) {
            TMDB.getPopularMovies().then(movies => dispatch(setMovies(movies)));
        }
    }, [dispatch, movieId, movieData]);

    


    return (
        <div className="movie-single__page">
            <Navbar isOverlay={true} />
            {movieData && <MovieSingle movieId={movieId} />}
        </div>
    );
}

export default SinglePage;