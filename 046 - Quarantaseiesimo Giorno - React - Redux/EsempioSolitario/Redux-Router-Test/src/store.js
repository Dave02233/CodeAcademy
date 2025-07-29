
import {configureStore} from '@reduxjs/toolkit';

// Actions
export const increment = () => ({ type: 'increment' });
export const decrement = () => ({ type: 'decrement' });

const initialState = 0;

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'multiply':
            return state * 2;
        case 'divide':
            return Math.floor(state / 2);
        default:
            return state;
    }
}

export const store = configureStore({
    reducer: {
        count: countReducer
    }
});

export const dispatch = store.dispatch;