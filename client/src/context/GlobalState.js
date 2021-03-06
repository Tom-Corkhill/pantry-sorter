import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
    favouriteItems: [],
    foodItems: [],
    error: null,
    loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Pantry actions
    async function getFoodItems() {
        try {
            const res = await axios.get('/api/pantry');
 
            dispatch({
                type:'GET_FOOD_ITEMS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type:'ITEM_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addFoodItem(foodItems) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            await axios.post('/api/pantry', foodItems, config);

            dispatch({
                type: 'ADD_FOOD_ITEM',
                payload: foodItems
            });
        } catch (err) {
            dispatch({
                type:'ITEM_ERROR',
                payload: err.response.data.error
            });
        }
    }


    async function deleteFoodItem(id) {
        try {
            await axios.delete(`/api/pantry/${id}`);

            dispatch({
                type: 'DELETE_FOOD_ITEM',
                payload: id
            });
        } catch (err) {

        }
    }


    // Favourite actions
    async function getFavouriteItems() {
        try {
            const res = await axios.get('/api/favourites');
 
            dispatch({
                type:'GET_FAVOURITE_ITEMS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type:'ITEM_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addFavouriteItem(favouriteItems) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            await axios.post('/api/favourites', favouriteItems, config);

            dispatch({
                type: 'ADD_FAVOURITE_ITEM',
                payload: favouriteItems
            });
        } catch (err) {
            dispatch({
                type:'ITEM_ERROR',
                payload: err.response.data.error
            });
        }
    }


    async function deleteFavouriteItem(id) {
        try {
            await axios.delete(`/api/favourites/${id}`);

            dispatch({
                type: 'DELETE_FAVOURITE_ITEM',
                payload: id
            });
        } catch (err) {

        }
    }


    

    return (<GlobalContext.Provider value={{
        foodItems:state.foodItems,
        favouriteItems:state.favouriteItems,
        error: state.error,
        loading: state.loading,
        getFoodItems,
        addFoodItem,
        deleteFoodItem,
        getFavouriteItems,
        addFavouriteItem,
        deleteFavouriteItem
    }}>
        {children}
    </GlobalContext.Provider>);
}