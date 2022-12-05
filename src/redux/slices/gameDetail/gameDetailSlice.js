import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};

const gameDetailSlice = createSlice({
  name: "gameDetail",
  initialState,
  reducers: {
    setGameDetail: (state, action) => {
      state.data = action.payload;
    },
    clearGameDetail: (state) => {
      return state;
    },
  },
  extraReducers: {},
});

export const { setGameDetail, clearGameDetail } = gameDetailSlice.actions;

export const selectGameDetail = (state) => state.gameDetailSlice;

export default gameDetailSlice.reducer;
