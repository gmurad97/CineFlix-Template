import axios from "axios";
import { TMDB_API_BASE_URL, TMDB_API_KEY } from "../../utils/constants.js";
import { ComposeUrl } from "../../utils/helpers.js";

class TMDB {
    static getPopularMovies = () => {
        try {
            const response = axios.get(ComposeUrl(TMDB_API_BASE_URL, "movie/popular", TMDB_API_KEY), {

            })
            return response.data;
        }
        catch (error) {
            console.error(`${error}`);
            return null;
        }
    }

    static getMovieVideos = (id) => {

    }
}

export default TMDB;