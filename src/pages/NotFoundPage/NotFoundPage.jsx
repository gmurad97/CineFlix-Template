import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <div className="error__page">
            <h1 className="error__title">Error 404</h1>
            <p className="error__description">The page you’re looking for doesn’t exist.</p>
            <Link className="error__link" to="/">Go Back to Home</Link>
        </div>
    );
}

export default NotFoundPage;