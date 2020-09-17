import React, { FunctionComponent, useState } from "react";
import SearchBar from "../../molecules/search-bar";
import Button from "../../atoms/button";
import Card from "../../molecules/card";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`;

const ListItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
`;

const ButtonRight = styled(Button)`
    margin: 0;
    background-color: #54ab4e;
    border-radius: 0;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
`;

const ListItems:FunctionComponent<ListItemProps> = ({ items }) => {

    const [value, setValue] = useState('');

    const onSearchClick = () => {
        console.log('Click');
    }
    return (
        <Container>
            <SearchBar value={value} setValue={setValue} right={() => <ButtonRight onClick={onSearchClick} text="Search" />}/>
            <ListItemsContainer>
                {items.map((item: Card) => {
                    return (
                        <Card source={item.source} header={item.header} key={item.id}></Card>
                    )
                })}
            </ListItemsContainer>
        </Container>
    )
}

export default ListItems;