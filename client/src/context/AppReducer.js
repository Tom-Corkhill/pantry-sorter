export default (state, action) => {
    switch(action.type) {
        case 'GET_FOOD_ITEMS':
            return {
                ...state,
                loading: false,
                foodItems: action.payload
            }
        case 'GET_FAVOURITE_ITEMS':
            return {
                ...state,
                loading: false,
                favouriteItems: action.payload
            }
        case 'ADD_FOOD_ITEM':
            return {
                ...state,
                foodItems: [...state.foodItems, action.payload]
            }
        case 'ADD_FAVOURITE_ITEM':
            return {
                ...state,
                favouriteItems: [...state.favouriteItems, action.payload]
            }
        case 'DELETE_FOOD_ITEM':
            return {
                ...state,
                foodItems: state.foodItems.filter(foodItem => foodItem._id !== action.payload)
            }
        case 'DELETE_FAVOURITE_ITEM':
            return {
                ...state,
                favouriteItems: state.favouriteItems.filter(favouriteItem => favouriteItem._id !== action.payload)
            }
        case 'ITEM_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
} 