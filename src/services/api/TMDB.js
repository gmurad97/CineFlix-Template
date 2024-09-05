import axios from "axios";
import { ComposeUrl } from "../../utils/helpers.js";
import { TMDB_API_BASE_URL, TMDB_API_KEY } from "../../utils/constants.js";

class TMDB {
    static getPopularMovies = async (page = 1) => {
        try {
            const response = await axios.get(ComposeUrl(TMDB_API_BASE_URL, "/movie/popular", TMDB_API_KEY, page), {
                "headers": {
                    "Accept": "application/json",
                }
            });
            return response.data.results;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getMovieDetails = async (movieId) => {
        try {
            const response = await axios.get(ComposeUrl(TMDB_API_BASE_URL, `/movie/${movieId}`, TMDB_API_KEY), {
                "headers": {
                    "Accept": "application/json",
                }
            });
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }

    static getMovieVideos = async (movieId) => {
        try {
            const response = await axios.get(ComposeUrl(TMDB_API_BASE_URL, `/movie/${movieId}/videos`, TMDB_API_KEY), {
                "headers": {
                    "Accept": "application/json",
                }
            });
            return response.data.results;
        }
        catch (error) {
            console.error(`Error fetching data: ${error.message}`);
            return null;
        }
    }
}

export default TMDB;