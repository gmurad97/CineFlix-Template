
import "./Menu.css";

import MenuItem from "./components/MenuItem/MenuItem";

const Menu = ({ items }) => {
    return (
        <div className="menu">
            <ul className="menu__list">
                {items.map((item, index) => (
                    <MenuItem
                     
                     key={index}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </ul>
        </div>
    );
}

export default Menu;