import React, { useContext, useEffect } from 'react';
import { FavouriteItem } from './FavouriteItem';
import { sortAlphabetically } from '../utils/format';

import { GlobalContext } from '../context/GlobalState';

export const FavouriteItemList = () => {
    const { favouriteItems, getFavouriteItems } = useContext(GlobalContext);

    useEffect(() => {
        getFavouriteItems();
    }, []);

    sortAlphabetically(favouriteItems);
 
    return (
        <React.Fragment>
            <h3>Favourites</h3>
            <ul>
                {favouriteItems.map(favouriteItem => (<FavouriteItem key={favouriteItem._id} favouriteItem={favouriteItem}/>))}
            </ul>
        </React.Fragment>
    )
}
