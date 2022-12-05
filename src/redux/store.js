import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";

import gamesReducer from "./slices/games/gamesSlice";
import favouritesReducer from "./slices/favourites/favouritesSlice";
import gameDetailReducer from "./slices/gameDetail/gameDetailSlice";

const rootReducer = combineReducers({
  games: gamesReducer,
  favourites: favouritesReducer,
  gameDetail: gameDetailReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
