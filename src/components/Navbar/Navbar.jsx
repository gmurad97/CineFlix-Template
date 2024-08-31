import "./Navbar.css";
import Logo from "./components/Logo/Logo.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Search from "./components/Search/Search.jsx";
import LogoDarkPng from "./assets/img/logo_dark.png";

const Navbar = () => {
    const menuItem = [
        {
            "name": "Home",
            "link": "/home",
            "dropdown": []
        },
        {
            "name": "Hollywood",
            "link": "/holywood",
            "dropdown": []
        },
        {
            "name": "Bollywood",
            "link": "/bollywood",
            "dropdown": [
                {
                    "name": "Action",
                    "link": "/action"
                },
                {
                    "name": "Family",
                    "link": "/family"
                },
                {
                    "name": "Comedy",
                    "link": "/comedy"
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
        <nav className="navbar">
            <div className="navbar__group">
                <Logo img={LogoDarkPng} link="/home" />
                <Menu items={menuItem} />
            </div>
            <Search />
        </nav>
    );
}

export default Navbar;