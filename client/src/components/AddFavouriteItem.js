import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const AddFavouriteItem = () => {
    const [text, setText] = useState('');

    const { addFavouriteItem } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newFavouriteItem = {
            id: Math.floor(Math.random() * 10000000),
            text
        }

        addFavouriteItem(newFavouriteItem);
    }

    return (
        <div className="favourites-add">
            <h3>Add new Favourite Food Item</h3>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <div className="dateSpace">
                    <TextField id="standard-basic" label="Add Favourite" value={text} onChange={(e) => setText(e.target.value)} required/>
                </div>
                
                <Button variant="contained" color="primary" type="submit">
                Add Favourite
                </Button>
            </form>
        </div>
    )
}
