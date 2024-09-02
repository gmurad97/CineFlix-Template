import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import MovieSinglePage from "../pages/MovieSinglePage/MovieSinglePage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="movies/:movieId" element={<MovieSinglePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;