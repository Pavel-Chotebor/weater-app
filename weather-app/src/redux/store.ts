import {configureStore} from '@reduxjs/toolkit'
import {citiesApi} from "./services/weather";
import {cityReducer} from "./slices/citySlice";

export const store = configureStore({
    reducer: {
        selectedCity: cityReducer,
        [citiesApi.reducerPath]: citiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(citiesApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch