import React, { FunctionComponent } from "react";
import Input from "../../atoms/input";
import styled from "styled-components";

const SearchInput = styled(Input)`
     border: none ;
     flex: 1;
     padding-right: 10px;
     outline: none;
`;

const SideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchBarContainer = styled.div`
    margin: 10px;
    display: flex;
    width: 300px;
    justify-content: space-between;
    border: 1px;
    border-style: solid;
`;

const SearchBar:FunctionComponent<SearchBarProps> = ({ value, setValue, left, right }) => {
    return (
        <SearchBarContainer>
            <SearchInput type="text" value={value} setValue={setValue} placeholder="Search" />
            {left && (
                <SideContainer>
                    {left()}
                </SideContainer>
            )}
            {right && (
                <SideContainer>
                    {right()}
                </SideContainer>
            )}
        </SearchBarContainer>
    )
}

export default SearchBar;