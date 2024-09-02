
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";
import SectionContent from "../../components/common/SectionContent/SectionContent";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
    return (
        <div className="home">
            <Navbar />
            <SectionContent title="Just added">
                <MovieList />
            </SectionContent>
            <Footer />
        </div>
    );
}

export default HomePage;