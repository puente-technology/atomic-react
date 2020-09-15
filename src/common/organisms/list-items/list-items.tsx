import React, { FunctionComponent, useState } from "react";
import './styles.css';
import SearchBar from "../../molecules/search-bar";
import Button from "../../atoms/button";
import Card from "../../molecules/card";

const ListItems:FunctionComponent<ListItemProps> = ({ items }) => {

    const [value, setValue] = useState('');

    const onSearchClick = () => {
        console.log('Click');
    }

    return (
        <div className="list-items-container">
            <SearchBar value={value} setValue={setValue} right={(cls:any) => <Button onClick={onSearchClick} text="Search" className={cls}></Button>}/>
            <div className="list-items">
                {items.map((item: Card) => {
                    return (
                        <Card source={item.source} header={item.header} key={item.id}></Card>
                    )
                })}
            </div>
        </div>
    )
}

export default ListItems;