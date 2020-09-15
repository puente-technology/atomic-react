import React, { FunctionComponent } from 'react';
import ListItems from '../../organisms/list-items/';
import Header from '../../organisms/header';

const cardItems = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
]

interface HomeTemplate {
    pageProps: any;
}

const HomeTemplate: FunctionComponent<HomeTemplate> = ({ pageProps }) => {
   const { headerProps, listItemProps} = pageProps;
    const { userName } = headerProps;
    const { items } = listItemProps;
    return (
        <div>
          <Header username={userName}/>
          <ListItems items={items || cardItems}/>
        </div>
      );
}

export default HomeTemplate;