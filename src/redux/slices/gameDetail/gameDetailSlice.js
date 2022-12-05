import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENPOINT, API_KEY } from "@env";
import axios from "axios";

const initialState = {};

export const fetchGameDetails = createAsyncThunk(
  "fetchGameDetails",
  async (gameId) => {
    const response = await axios.get(`${API_ENPOINT}/${gameId}?key=${API_KEY}`);
    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchGameDetails.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGameDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGameDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching game details";
    });
  },
});

export const { setGameDetail, clearGameDetail } = gameDetailSlice.actions;

export const selectGameDetail = (state) => state.gameDetail;

export default gameDetailSlice.reducer;
