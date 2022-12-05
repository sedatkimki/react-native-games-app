import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.data = action.payload;
    },
    clearGames: (state) => {
      return state;
    },
  },
  extraReducers: {},
});

export const { setGames, clearGames } = gamesSlice.actions;

export const selectGames = (state) => state.games;

export default gamesSlice.reducer;
