import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './features/filterSlice.js';
import { peopleReducer } from './features/peopleSlice.js';
import { filteredPeopleReducer } from './features/filteredPeopleSlice.js';

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        people: peopleReducer,
        filteredPeople: filteredPeopleReducer
    }
});
