import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { topicApi } from "./services/ikea";

const rootReducer = combineReducers({
  [topicApi.reducerPath]: topicApi.reducer,
});

export const setupStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat( topicApi.middleware),
    preloadedState,
  });
};
