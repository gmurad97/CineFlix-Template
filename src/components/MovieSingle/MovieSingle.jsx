import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./MovieSingle.css";
import TMDB from "../../services/api/TMDB.js";
import { StringToDate } from "../../utils/helpers.js";
import { TMDB_LARGE_POSTER_BASE_URL, TMDB_ORIGINAL_POSTER_BASE_URL } from "../../utils/constants.js";

const MovieSingle = ({ movieData }) => {
    const [youtubeKey, setYoutubeKey] = useState("nEkZ9MJ01Lc");
    const [showModal, setShowModal] = useState(false);

    const movieId = movieData.id;
    const moviePosterImage = TMDB_LARGE_POSTER_BASE_URL + movieData.poster_path;
    const movieBackdropImage = TMDB_ORIGINAL_POSTER_BASE_URL + movieData.backdrop_path;
    const movieDate = StringToDate(movieData.release_date);

    useEffect(() => {
        TMDB.getMovieVideos(movieId).then(videos => setYoutubeKey(videos?.[0]?.key))
    }, [movieId]);

    return (
        <div className="movie-single">
            <div className="movie-single__backdrop">
                <img className="movie-single__backdrop-img" src={movieBackdropImage} alt={movieData.title} />
            </div>
            <div className="movie-single__data">
                <div className="movie-single__poster">
                    <img className="movie-single__poster-img" src={moviePosterImage} alt={movieData.title} />
                </div>
                <div className="movie-single__information">
                    <h1 className="movie-single__title-year">{`${movieData.title} (${movieDate.getFullYear()})`}</h1>
                    <div className="movie-single__about">
                        <div className="movie-single__about-rate">
                            <i className="fi fi-sr-star"></i>
                            <span className="movie-single__about-rate-value">{movieData.vote_average.toFixed(1)}</span>
                        </div>
                        <div className="movie-single__about-adult">
                            <i className="fi fi-sr-age-restriction-eighteen"></i>
                            <span className="movie-single__about-adult-value">{movieData.adult ? "Yes" : "No"}</span>
                        </div>
                    </div>
                    <p className="movie-single__description">{movieData.overview}</p>
                    <div className="movie-single__details-buttons">
                        <button className="movie-single__view-trailer-btn" type="button" onClick={() => setShowModal(true)}>
                            <span className="movie-single__view-trailer-btn-text">View Trailer</span>
                            <i className="fi fi-rs-play"></i>
                        </button>
                        <button className="movie-single__download-btn" type="button">
                            <span className="movie-single__download-btn-text">Download</span>
                            <i className="fi fi-sr-download"></i>
                        </button>
                    </div>
                    {showModal &&
                        createPortal(
                            <div className="youtube__dialog" onClick={() => setShowModal(false)}>
                                <div className="youtube__dialog-content" onClick={(e) => e.stopPropagation()}>
                                    <button className="youtube__dialog-close-btn" onClick={() => setShowModal(false)}>
                                        <i class="fi fi-rs-circle-xmark"></i>
                                    </button>
                                    <iframe
                                        title={`Youtube Video Teaser: ${youtubeKey}`}
                                        src={`https://www.youtube.com/embed/${youtubeKey}`}
                                    >
                                    </iframe>
                                </div>
                            </div>
                            , document.body)
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieSingle;