import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchInterventi = createAsyncThunk('interventi/fetchInterventi', 
    async () => {
    const response = await fetch('/api/interventiDaAggiungere');
    if (response.ok) {
       return await response.json();
    } else {
        throw new Error ('Feth interventi fallito')
    }
});

const sliceOptions = {
    name: 'interventi',
    initialState: {
        loadingInterventi: false,
        errorLoadingInterventi: false,
        interventi: [],
        interventiFiltrati: []
    },
    reducers: {
        setInterventiFiltrati: (state, action) => {
            state.interventiFiltrati = action.payload;
        },
        resetInterventiFiltrati: (state) => {
            state.interventiFiltrati = [];
        }
    },
    extraReducers: {
        [fetchInterventi.pending]: (state) => {
            state.loadingInterventi = true;
            state.errorLoadingInterventi = false;
        },
        [fetchInterventi.fulfilled]: (state, action) => {
            state.loadingInterventi = false;
            state.errorLoadingInterventi = false;
            state.interventi = action.payload.map(intervento => intervento); //Vedi formattazione del fetch
        },
        [fetchInterventi.rejected]: (state) => {
            state.loadingInterventi = false;
            state.errorLoadingInterventi = true;
        }
    }
};

export const interventiSlice = createSlice(sliceOptions);

