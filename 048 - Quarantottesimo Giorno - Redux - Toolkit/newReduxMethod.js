import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchTermSlice.js';

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
});

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const {addRecipe, removeRecipe} = favoriteRecipesSlice.actions; //Per usare le azioni in altri file
export default favoriteRecipesSlice.reducer; //Per usare il reducer in store.js


