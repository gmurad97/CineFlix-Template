import "./Menu.css";
import MenuItem from "./components/MenuItem/MenuItem.jsx";

const Menu = ({ items }) => {
    return (
        <div className="menu">
            <ul className="menu__list">
                {items.map((item, idx) => (
                    <MenuItem dropdown={item.dropdown} link={item.link} key={idx}>{item.name}</MenuItem>
                ))}
            </ul>
        </div>
    );
}

export default Menu;