import React, { FunctionComponent } from "react";
import './styles.css';
import Input from "../../atoms/input";

const SearchBar:FunctionComponent<SearchBarProps> = ({ value, setValue, left, right }) => {
    return (
        <div className="search-bar">
            <Input type="text" value={value} setValue={setValue} placeholder="Search" className="search-input"></Input>
            {left && (
                <div>
                    {left}
                </div>
            )}
            {right && (
                <div className="right-container">
                    {right("inline-element-right")}
                </div>
            )}
        </div>
    )
}

export default SearchBar;