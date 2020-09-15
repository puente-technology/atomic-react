import React, { FunctionComponent } from 'react';
import HomeTemplate from '../../templates/home';

const cardItems = [
    {
      id: 1,
      source: '',
      header: 'Item 1'
    },
    {
      id: 2,
      source: '',
      header: 'Item 2',
    },
    {
      id: 3,
      source: '',
      header: 'Item 3',
    },
    {
      id: 4,
      source: '',
      header: 'Item 4',
    },
    {
      id: 5,
      source: '',
      header: 'Item 5'
    },
]


const HomePage:FunctionComponent = () => {

    // React logic to get data etc.

    const pageProps = {
        headerProps : {
            userName: 'Berkay Yılmaz',
            avatarImage: '',
        },
        listItemProps : {
            items: [...cardItems],
        }
    }

    return (
        <HomeTemplate pageProps={pageProps} />
    )
};

export default HomePage;