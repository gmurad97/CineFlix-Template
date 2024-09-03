import "./HomePage.css";
import SectionContent from "../../components/common/SectionContent/SectionContent.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const HomePage = () => {
    return (
        <div className="home__page">
            <Navbar isOverlay={false} />
            <SectionContent title="Just added">
                <MovieList />
            </SectionContent>
            <Footer />
        </div>
    );
}

export default HomePage;