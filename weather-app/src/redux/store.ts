import {configureStore} from '@reduxjs/toolkit'
import {weatherApi} from "./services/weather";
import {cityReducer} from "./slices/citySlice";

export const store = configureStore({
    reducer: {
        selectedCity: cityReducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch