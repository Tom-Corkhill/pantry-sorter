import React, { useContext, useEffect } from 'react';
import { FavouriteItem } from './FavouriteItem';
import { sortAlphabetically } from '../utils/format';

import { GlobalContext } from '../context/GlobalState';

export const FavouriteItemList = () => {
    const { favouriteItems, getFavouriteItems } = useContext(GlobalContext);

    useEffect(getFavouriteItems, []);

    sortAlphabetically(favouriteItems);
 
    return (
        <React.Fragment>
            <div className="left">
                <h1>Favourites</h1>
            </div>
            <ul className="favourites-table">
                {favouriteItems.map(favouriteItem => (<FavouriteItem key={favouriteItem._id} favouriteItem={favouriteItem}/>))}
            </ul>
        </React.Fragment>
    )
}
 