import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
})



export const setupStore = (preloadedState={}) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(pokemonApi.middleware),
    preloadedState,
  })
}
