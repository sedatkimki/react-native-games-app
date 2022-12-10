import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";

import gamesReducer from "./slices/games/gamesSlice";
import favouritesReducer from "./slices/favourites/favouritesSlice";
import gameDetailsReducer from "./slices/gameDetails/gameDetailsSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const rootReducer = combineReducers({
  games: gamesReducer,
  favourites: favouritesReducer,
  gameDetails: gameDetailsReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
// persistor.purge();
