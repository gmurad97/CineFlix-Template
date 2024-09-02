import { Link } from "react-router-dom";
import "./MovieItem.css";
import { TMDB_SMALL_POSTER_BASE_URL } from "../../../../utils/constants.js";
import { StringToDate } from "../../../../utils/helpers.js";

const MovieItem = ({ movieData }) => {
    const moviePosterImage = TMDB_SMALL_POSTER_BASE_URL + movieData.poster_path;
    const movieDate = StringToDate(movieData.release_date);

    return (
        <div className="movie">
            <Link className="movie__link" to={`/movies/${movieData.id}`}>
                <div className="movie__header">
                    <div className="movie__header-img-wrapper">
                        <img className="movie__header-img" src={moviePosterImage} alt={movieData.title} />
                    </div>
                </div>
                <div className="movie__body">
                    <h1 className="movie__title">{movieData.title}</h1>
                    <p className="movie__year">{movieDate.getFullYear()}</p>
                </div>
            </Link>
        </div>
    );
}

export default MovieItem;