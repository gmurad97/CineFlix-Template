import { useState } from "react";
import "./Search.css";

const Search = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClearInput = () => {
        setInputValue("");
    }

    return (
        <div className="search">
            <div className="search__textbox-wrapper">
                <input
                    className="search__input"
                    type="text"
                    name="search_movies"
                    placeholder="Search Movies"
                    autoComplete="off"
                    required
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                />
                {inputValue && <i className="fi fi-sr-cross" onClick={() => handleClearInput()}></i>}
            </div>
            <div className="search__button-wrapper">
                <button className="search__button" type="button">
                    <i className="fi fi-rs-search"></i>
                </button>
            </div>
        </div>
    );
}

export default Search;