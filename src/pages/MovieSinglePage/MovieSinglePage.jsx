import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieSinglePage.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MovieSingle from "../../components/MovieSingle/MovieSingle.jsx";
import TMDB from "../../services/api/TMDB.js";

const SinglePage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        TMDB.getMovieDetails(movieId).then(movie => setMovie(movie));
    }, [movieId]);

    return (
        <div className="movie-single__page">
            <Navbar isOverlay={true} />
            {movie && <MovieSingle movieData={movie} />}
        </div>
    );
}

export default SinglePage;