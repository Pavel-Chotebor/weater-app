import {createContext, useContext} from "react";

interface WeatherRoutesContext {
    overview: string,
    favorite: string,
}

export const weatherRoutesContext = createContext<WeatherRoutesContext>({
    overview: "",
    favorite: "",
})

export const useWeatherRoutesContext = ():WeatherRoutesContext => {
    return useContext(weatherRoutesContext)
}