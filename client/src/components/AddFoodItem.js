import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import 'date-fns';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export const AddFoodItem = () => {
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());

    const handleDateChange = (date) => {
        setDate(date);
      };

    const { addFoodItem } = useContext(GlobalContext);

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
        <div className="add">
            <h3>Add new Food Item</h3>
            <form className="addForm" noValidate autoComplete="off" onSubmit={onSubmit}>
                <div className="dateSpace">
                    <TextField id="standard-basic" label="Add Food" value={text} onChange={(e) => setText(e.target.value)} required/>
                </div>
                <div className="dateSpace">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <Button variant="contained" color="primary" type="submit">
                Add Food
                </Button>
            </form>
        </div>
    )
}