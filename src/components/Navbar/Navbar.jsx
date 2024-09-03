import "./Navbar.css";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Search from "./components/Search/Search.jsx";
import LogoDarkPng from "./assets/img/logo_dark.png";

const Navbar = ({ isOverlay = false }) => {
    const menuItem = [
        {
            "name": "Home",
            "link": "/",
            "dropdown": []
        },
        {
            "name": "Hollywood",
            "link": "/hollywood",
            "dropdown": []
        },
        {
            "name": "Bollywood",
            "link": "/bollywood",
            "dropdown": [
                {
                    "name": "Action",
                    "link": "/bollywood/action"
                },
                {
                    "name": "Family",
                    "link": "/bollywood/family"
                },
                {
                    "name": "Comedy",
                    "link": "/bollywood/comedy"
                }
            ]
        },
        {
            "name": "Korean",
            "link": "/korean",
            "dropdown": []
        },
        {
            "name": "Chinese",
            "link": "/chinese",
            "dropdown": []
        },
        {
            "name": "Japanese",
            "link": "/japanese",
            "dropdown": []
        },
        {
            "name": "Turkish",
            "link": "/turkish",
            "dropdown": []
        }
    ];

    return (
        <nav className={`navbar ${isOverlay ? "overlay" : ""}`}>
            <div className="navbar__group">
                <Logo img={LogoDarkPng} link="/" />
                <Menu items={menuItem} />
            </div>
            <Search />
        </nav>
    );
}

export default Navbar;