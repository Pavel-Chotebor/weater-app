import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {WeatherRouteDefinitions} from "./WeatherRouteDefinitions";
import {City, WeatherForecast} from "../../models";

//here only for task purpose
const API_KEY = "apikey=reu4w4I1PAsfaWpKokjkDOgDf2qnzig9"

export const weatherApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://dataservice.accuweather.com"}),
    endpoints: (builder) => ({
        getCities: builder.query<City[], string>({
            query: (city) => `${WeatherRouteDefinitions.cities}?${API_KEY}&q=${city}`,
        }),
        getForecast: builder.query<WeatherForecast, string>({
            query: (cityId) => `${WeatherRouteDefinitions.forecastDetail}/${cityId}?${API_KEY}`,
        }),
    }),
})


export const {useGetCitiesQuery, useGetForecastQuery} = weatherApi