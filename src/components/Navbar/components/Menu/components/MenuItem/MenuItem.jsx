import "./MenuItem.css";
import { NavLink } from "react-router-dom";

const MenuItem = ({children}) => {
    return (
        <li className="menu__item">
            <NavLink className="menu__link" to={"/"}>{children}</NavLink>
        </li>
    );
}

export default MenuItem;