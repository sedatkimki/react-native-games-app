import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.data = action.payload;
    },
    clearFavourites: (state) => {
      return state;
    },
  },
  extraReducers: {},
});

export const { setFavourites, clearFavourites } = favouritesSlice.actions;

export const selectFavourites = (state) => state.favourites;

export default favouritesSlice.reducer;
