import { Link } from "react-router-dom";
import "./NotFoundPage.css";

import SadSmile from "./assets/img/sad_smile.png";

const NotFoundPage = () => {
    return (
        <div className="error__page">
            <div className="error__img-container">
                <img className="error__img" src={SadSmile} alt="Sad Smile" />
            </div>
            <h1 className="error__title">Error 404</h1>
            <p className="error__description">The page you’re looking for doesn’t exist.</p>
            <Link className="error__link" to="/">Go Back to Home</Link>
        </div>
    );
}

export default NotFoundPage;