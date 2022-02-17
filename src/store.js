import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon';
import { topicApi } from './services/ikea';

const rootReducer = combineReducers({
 /*  [pokemonApi.reducerPath]: pokemonApi.reducer, */
  [topicApi.reducerPath]: topicApi.reducer,
})



export const setupStore = (preloadedState={}) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(topicApi.middleware),
     // getDefaultMiddleware().concat(pokemonApi.middleware, topicApi.middleware),
    preloadedState,
  })
}
