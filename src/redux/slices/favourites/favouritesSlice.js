import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  count: 0,
  list: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourites: (state, action) => {
      if (state.list.find((item) => item.id === action.payload.id)) {
        console.log("its already added to favourites");
      } else {
        state.list.push(action.payload);
        state.count = state.list.length;
      }
    },
    removeFromFavourites: (state, action) => {
      _.remove(state.list, (item) => {
        return item.id === action.payload.id;
      });
      state.count = state.list.length;
    },
  },
  extraReducers: {},
});

export const { addFavourites, removeFromFavourites } = favouritesSlice.actions;

export const selectFavourites = (state) => state.favourites;

export default favouritesSlice.reducer;
