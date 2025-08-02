import { createSlice } from "@reduxjs/toolkit";
import { store } from '../store.js';

const options = {
    name: 'filteredPeople',
    initialState: [],
    reducers: {
        setFilteredPeople: (state, action) => {
            return action.payload;
        }
    }
}

const filteredPeopleSlice = createSlice(options);

export const { setFilteredPeople } = filteredPeopleSlice.actions;
export const filteredPeopleReducer = filteredPeopleSlice.reducer;