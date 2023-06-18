import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { usersReducer } from "./users/usersSlice";
import { categoriesReducer } from "./categories/categoriesSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const usersPersistConfig = {
  key: "users",
  storage,
};

const persistedUsersReducer = persistReducer(usersPersistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
    category: categoriesReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
