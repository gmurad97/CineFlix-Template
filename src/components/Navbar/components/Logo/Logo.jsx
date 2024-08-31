import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = ({ img, link }) => {
    return (
        <figure className="logo">
            <Link to={link} className="logo__link">
                <img className="logo__img" src={img} alt="Logo Dark" />
            </Link>
        </figure>
    );
}

export default Logo;