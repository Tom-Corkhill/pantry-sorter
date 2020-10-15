import React, {useState, useContext} from 'react'; 
import { GlobalContext } from '../context/GlobalState';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const FavouriteItem = ({ favouriteItem }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    
    const { addFoodItem, deleteFavouriteItem } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newFoodItem = {
            id: Math.floor(Math.random() * 10000000),
            text,
            date
        }

        addFoodItem(newFoodItem);
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <Grid  className="favourite-foods" container spacing={2}>
                    <Grid item xs={3}>
                        <p>{favouriteItem.text}</p>
                    </Grid>
                    <Grid item xs={3}>
                        <label className="favourites-date" htmlFor="date">Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </Grid>
                    <Grid item xs={3}>
                        <button value={favouriteItem.text} onClick={(e) => setText(e.target.value)}>
                            Add Food to Pantry
                        </button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="secondary" onClick={() => deleteFavouriteItem(favouriteItem._id)}>
                        Delete
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    )
}
