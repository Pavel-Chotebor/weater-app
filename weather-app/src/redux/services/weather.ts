import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {WeatherRouteDefinitions} from "./WeatherRouteDefinitions";

//here only for task purpose
const API_KEY = "apikey=0hlptnmlXN76UjeWsAJQCgWR5zeUP1eg"

//todo tupe
export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://dataservice.accuweather.com"}),
    endpoints: (builder) => ({
        getCities: builder.query({
            query: (city) => `${WeatherRouteDefinitions.cities}?${API_KEY}&q=${city}`,
        }),
        getForecast: builder.query({
            query: (cityId) => `${WeatherRouteDefinitions.forecastDetail}/${cityId}?${API_KEY}`,
        }),
    }),
})


export const {useGetCitiesQuery, useGetForecastQuery} = weatherApi