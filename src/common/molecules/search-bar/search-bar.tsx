import React, { FunctionComponent } from "react";
import './styles.css';
import Input from "../../atoms/input";
import styled from "styled-components";

const SearchInput = styled(Input)`
   &&& { 
     border: none ;
     flex: 1;
     padding-right: 10px;
     outline: none;
   }
`;

const SearchBar:FunctionComponent<SearchBarProps> = ({ value, setValue, left, right }) => {
    return (
        <div className="search-bar">
            <SearchInput type="text" value={value} setValue={setValue} placeholder="Search" />
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