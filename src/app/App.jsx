import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;