import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'filter',
    initialState: '',
    reducers: {
        removeFilter: state => state = '',
        setFilter: (state, action) => state = action.payload
    }
}

const filterSlice = createSlice(options);

export const { removeFilter, setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
