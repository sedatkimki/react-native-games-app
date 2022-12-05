import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENPOINT, API_KEY } from "@env";

const initialState = {};

export const fetchGames = createAsyncThunk(
  "fetchGames",
  async (searchInput) => {
    const response = await axios.get(
      `${API_ENPOINT}?key=${API_KEY}&page_size=10&page=1&search=${
        searchInput ? searchInput : ""
      }`
    );
    return response.data;
  }
);

export const fetchMoreGames = createAsyncThunk(
  "fetchMoreGames",
  async (arg, { getState }) => {
    const state = getState();
    if (state?.games?.data?.next) {
      const response = await axios.get(state.games.data.next);
      return response.data;
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching games";
    });
    builder.addCase(fetchMoreGames.pending, (state, action) => {
      state.moreLoading = true;
      state.error = "";
    });
    builder.addCase(fetchMoreGames.fulfilled, (state, action) => {
      state.moreLoading = false;
      state.data.next = action.payload.next;
      state.data.results = [...state.data.results, ...action.payload.results];
    });
    builder.addCase(fetchMoreGames.rejected, (state, action) => {
      state.moreLoading = false;
      state.error = "Error fetching games";
    });
  },
});

export const { setGames, clearGames } = gamesSlice.actions;

export const getGames = (state) => state.games;

export default gamesSlice.reducer;
