import { NavLink } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ dropdown, link, children }) => {
    const menuLinkClass = ({ isActive }) => isActive ? "menu__link active" : "menu__link";
    const dropdownLinkClass = ({ isActive }) => isActive ? "dropdown__link active" : "dropdown__link";

    return (
        <li className="menu__item">
            {Array.isArray(dropdown) && dropdown.length > 0 ? (
                <>
                    <NavLink className={menuLinkClass} to={link}>{children}</NavLink>
                    <div className="dropdown">
                        <ul className="dropdown__list">
                            {dropdown.map((item, idx) => (
                                <li className="dropdown__item" key={idx}>
                                    <NavLink className={dropdownLinkClass} to={item.link}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <NavLink className={menuLinkClass} to={link}>{children}</NavLink>
            )}
        </li>
    );
}

export default MenuItem;