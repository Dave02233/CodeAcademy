import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: "people",
    initialState: ['Davide', 'Giovanni', 'Francesco'],
    reducers: {
        addPerson: (state, action) => {
            return [...state, action.payload];
        },
        removePerson: (state, action) => {
            return state.filter(person => person !== action.payload);
        }
    }
};

const peopleSlice = createSlice(options);

export const { addPerson, removePerson } = peopleSlice.actions; 
export const peopleReducer = peopleSlice.reducer;
